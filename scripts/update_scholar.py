import json
import os
from datetime import datetime
from scholarly import scholarly

# Path to the profile JSON file (relative to root of repo)
PROFILE_FILE = "scholar_profile_DGm9l2wAAAAJ.json"

def main():
    if not os.path.exists(PROFILE_FILE):
        print(f"Error: {PROFILE_FILE} not found.")
        return

    with open(PROFILE_FILE, "r") as f:
        data = json.load(f)
    
    user_id = data.get("user_id")
    if not user_id:
        print("Error: user_id not found in JSON.")
        return

    print(f"Fetching data for Google Scholar User ID: {user_id}")

    try:
        author = scholarly.search_author_id(user_id)
        print("Filling author profile details (this may take a few seconds)...")
        scholarly.fill(author, sections=['basics', 'indices', 'counts', 'coauthors', 'publications'])
        
        # Update Basic Info
        data["basic_info"]["name"] = author.get("name", data["basic_info"].get("name"))
        data["basic_info"]["affiliation"] = author.get("affiliation", data["basic_info"].get("affiliation"))
        data["basic_info"]["email_domain"] = author.get("email_domain", data["basic_info"].get("email_domain"))
        data["basic_info"]["profile_image"] = author.get("url_picture", data["basic_info"].get("profile_image"))
        
        # Update Citation Metrics
        data["citation_metrics"]["citations"]["all_time"] = str(author.get("citedby", data["citation_metrics"]["citations"]["all_time"]))
        data["citation_metrics"]["citations"]["since_2019"] = str(author.get("citedby5y", data["citation_metrics"]["citations"]["since_2019"]))
        
        data["citation_metrics"]["h-index"]["all_time"] = str(author.get("hindex", data["citation_metrics"]["h-index"]["all_time"]))
        data["citation_metrics"]["h-index"]["since_2019"] = str(author.get("hindex5y", data["citation_metrics"]["h-index"]["since_2019"]))
        
        data["citation_metrics"]["i10-index"]["all_time"] = str(author.get("i10index", data["citation_metrics"]["i10-index"]["all_time"]))
        data["citation_metrics"]["i10-index"]["since_2019"] = str(author.get("i10index5y", data["citation_metrics"]["i10-index"]["since_2019"]))
        
        # Update Research Interests
        if "interests" in author:
            data["research_interests"] = author["interests"]
            
        # Map existing publications by lowercased title
        existing_pubs = {p.get("title", "").lower(): p for p in data.get("publications", [])}
        
        publications = []
        for pub in author.get("publications", []):
            pub_info = pub.get("bib", {})
            pub_title = pub_info.get("title", "")
            if not pub_title:
                continue
            
            # Try to find existing pub to preserve details like authors if not fully fetched
            existing_pub = existing_pubs.get(pub_title.lower(), {})
            
            pub_item = {
                "title": pub_title,
                "scholar_url": pub.get("author_pub_id", ""),
                "authors": pub_info.get("author", "") or existing_pub.get("authors", ""),
                "journal": pub_info.get("citation", "") or existing_pub.get("journal", ""),
                "citations": pub.get("num_citations", 0),
                "year": pub_info.get("pub_year", "") or existing_pub.get("year", "")
            }
            
            # Format scholar url
            if pub_item["scholar_url"]:
                pub_item["scholar_url"] = f"https://scholar.google.com/citations?view_op=view_citation&hl=en&user={user_id}&citation_for_view={pub_item['scholar_url']}"
            elif existing_pub.get("scholar_url"):
                pub_item["scholar_url"] = existing_pub.get("scholar_url")
            
            publications.append(pub_item)
            
        if publications:
            # Sort publications by year descending, missing years at bottom
            publications.sort(key=lambda x: str(x.get("year", "0")), reverse=True)
            data["publications"] = publications
            
        # Update Coauthors
        coauthors = []
        for coauthor in author.get("coauthors", []):
            coauthors.append({
                "name": coauthor.get("name", ""),
                "scholar_url": f"https://scholar.google.com/citations?user={coauthor.get('scholar_id', '')}&hl=en",
                "user_id": coauthor.get("scholar_id", "")
            })
        if coauthors:
            data["coauthors"] = coauthors
            
        # Update Citations by year
        cites_per_year = author.get("cites_per_year", {})
        if cites_per_year:
            citations_by_year = [{"year": int(y), "citations": int(c)} for y, c in cites_per_year.items()]
            data["citations_by_year"] = sorted(citations_by_year, key=lambda x: x["year"])
            
        # Update Timestamp
        data["fetch_timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Write back to JSON
        with open(PROFILE_FILE, "w") as f:
            json.dump(data, f, indent=2)
            
        print("Successfully updated profile data.")
        
    except Exception as e:
        print(f"Error fetching data: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
