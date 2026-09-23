import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Journal articles and conference papers by Mohsin Furkh Dar on medical image segmentation, classification and loss function design.",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
