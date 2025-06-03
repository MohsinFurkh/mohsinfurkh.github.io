import Link from 'next/link';

// This would typically come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Advances in Medical Image Segmentation',
    excerpt: 'Exploring the latest techniques in medical image segmentation and their clinical applications.',
    date: 'May 15, 2024',
    readTime: '8 min read',
    category: 'Research',
    slug: 'advances-medical-image-segmentation'
  },
  {
    id: 2,
    title: 'The Future of AI in Healthcare',
    excerpt: 'How artificial intelligence is transforming healthcare delivery and patient outcomes.',
    date: 'April 28, 2024',
    readTime: '6 min read',
    category: 'AI',
    slug: 'future-ai-healthcare'
  },
  {
    id: 3,
    title: 'Deep Learning for Early Disease Detection',
    excerpt: 'Leveraging deep learning models for early and accurate disease diagnosis from medical images.',
    date: 'March 10, 2024',
    readTime: '10 min read',
    category: 'Deep Learning',
    slug: 'deep-learning-disease-detection'
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Insights and updates on medical AI, deep learning, and healthcare technology</p>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                disabled
              >
                Previous
              </button>
              <button className="px-4 py-2 border border-primary bg-primary text-white rounded-md hover:bg-primary/90">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
