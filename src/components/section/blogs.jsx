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

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleBlog = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 min-h-screen font-sans text-white bg-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold text-center text-pink-500 uppercase">
          Avasa Blog Page
        </h2>
        <div className="flex flex-col gap-10">
          {blogs.map((blog) => {
            const isExpanded = expandedId === blog.id;
            return (
              <div key={blog.id} className="w-full">
                <div className="p-6 bg-[#2b2b2b] rounded-xl border-pink-500/10 shadow-lg transition-all duration-300 border">
                  <h3 className="mb-1 text-xl font-semibold text-white">
                    {blog.title}
                  </h3>
                  <p className="mb-3 text-sm text-pink-400 italic">
                    By {blog.author}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {isExpanded ? blog.content : blog.excerpt}
                  </p>
                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="inline-block mt-4 text-pink-400 text-sm font-medium hover:underline"
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

export default Blogs;
