import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "The Aravani Project",
    author: "Mahalakshmi",
    excerpt: "Unlocking Soon...",
    content: "Unlocking Soon...",
  },
  {
    id: 2,
    title: "Connection lost in digital world",
    author: "Gayathri Devi",
    excerpt: "Unlocking Soon...",
    content: "Unlocking Soon...",
  },
  {
    id: 3,
    title: "Gender Roles are choking us",
    author: "Drishti Wacchani",
    excerpt: "Unlocking Soon...",
    content: "Unlocking Soon...",
  },
];

const BlogsPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleBlog = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] py-20 font-sans text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold text-center text-pink-500 uppercase">Avasa Blog Page</h2>
        <div className="flex flex-col gap-10">
          {blogs.map((blog) => {
            const isExpanded = expandedId === blog.id;
            return (
              <div
                key={blog.id}
                className="w-full"
              >
                <div className="bg-[#2b2b2b] p-6 rounded-xl shadow-lg transition-all duration-300 border border-pink-500/10">
                  <h3 className="text-xl font-semibold text-white mb-1">{blog.title}</h3>
                  <p className="text-sm text-pink-400 mb-3 italic">By {blog.author}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {isExpanded ? blog.content : blog.excerpt}
                  </p>
                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="mt-4 inline-block text-pink-400 hover:underline text-sm font-medium"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
