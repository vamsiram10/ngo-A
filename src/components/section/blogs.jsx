import React, { useState, useRef, useEffect } from "react";

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const previewRef = useRef(null);

  // Example blog data; replace with your own or fetch from an API
  const blogs = [
    {
      id: 1,
      title: "The Power of Kindness",
      description:
        "A short essay on the impact of kindness in our daily lives.",
      pdfUrl: "/blogs/Blog by krishna.pdf",
    },
    {
      id: 2,
      title: "Volunteering: A Life-Changing Experience",
      description: "Reflections on volunteering and its benefits.",
      pdfUrl: "/blogs/linkedin post.pdf",
    },
    {
      id: 3,
      title: "Sustainable Living Tips",
      description: "Practical advice for a more sustainable lifestyle.",
      pdfUrl: "/pdfs/sustainable-living.pdf",
    },
  ];

  // Toggle logic for Read Blog button
  const handleReadBlog = (blog) => {
    if (selectedBlog && selectedBlog.id === blog.id) {
      setSelectedBlog(null);
    } else {
      setSelectedBlog(blog);
    }
  };

  // Scroll to the preview when a blog is opened (desktop only)
  useEffect(() => {
    if (selectedBlog && previewRef.current) {
      // Only scroll on desktop screens
      if (window.innerWidth >= 768) {
        previewRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [selectedBlog]);

  return (
    <div className="py-5 px-2 min-h-screen bg-neutral-950">
      <h1 className="mb-10 text-3xl font-bold text-pink-500 text-center md:text-4xl">
        BLOGS
      </h1>
      <div className="flex flex-col gap-8 mx-auto max-w-3xl">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col p-6 bg-neutral-900 border-neutral-800 rounded-xl shadow-lg border"
          >
            <h2 className="mb-2 text-xl font-semibold text-white">
              {blog.title}
            </h2>
            <p className="flex-grow mb-4 text-neutral-400">
              {blog.description}
            </p>
            <button
              onClick={() => handleReadBlog(blog)}
              className="py-2 px-4 text-white font-bold bg-pink-600 transition-colors duration-200 hover:bg-pink-700 rounded"
            >
              Read Blog
            </button>
            {selectedBlog && selectedBlog.id === blog.id && (
              <div className="mt-6" ref={previewRef}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pink-400 font-semibold">Preview</span>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="text-sm text-neutral-400 hover:text-pink-400"
                  >
                    Close
                  </button>
                </div>
                <div
                  className="overflow-hidden flex flex-col w-full max-h-[80vh] bg-black border-neutral-800 border rounded aspect-[4/5] md:max-h-[70vh]"
                  style={{
                    // On desktop, limit the preview to a max height and allow scroll if needed
                    height: "auto",
                  }}
                >
                  <iframe
                    src={blog.pdfUrl}
                    title={blog.title}
                    className="w-full h-[60vh] min-h-[400px] min-h-[500px] max-h-[70vh] bg-black rounded md:h-[70vh]"
                    style={{
                      border: "none",
                      // On desktop, limit the height to avoid overflow
                      maxHeight: "70vh",
                    }}
                  />
                </div>
                <a
                  href={blog.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-pink-500 text-sm hover:underline"
                >
                  Open in new tab
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
