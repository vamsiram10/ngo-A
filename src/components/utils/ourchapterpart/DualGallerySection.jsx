import React from "react";

const galleryOne = Array.from({ length: 12 }).map((_, i) => ({
  src: `https://source.unsplash.com/random/400x300?sig=${i + 1}`,
  alt: `Gallery 1 - Image ${i + 1}`,
}));

const galleryTwo = Array.from({ length: 12 }).map((_, i) => ({
  src: `https://source.unsplash.com/random/400x300?sig=${i + 20}`,
  alt: `Gallery 2 - Image ${i + 1}`,
}));

const DualGallerySection = () => {
  return (
    <section style={{ padding: "2rem 0", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: "600",
            fontSize: "2rem",
            color: "#222",
          }}
        >
          Our Chapter Gallery
        </h2>

        <div
          className="dual-gallery-section-flex"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {[
            { title: "Gallery One", data: galleryOne },
            { title: "Gallery Two", data: galleryTwo },
          ].map((gallery, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                minWidth: "280px",
                maxWidth: "100%",
                height: "600px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Ensure child overflow is contained
              }}
            >
              <h3
                style={{
                  marginBottom: "1rem",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  color: "#444",
                  flexShrink: 0,
                }}
              >
                {gallery.title}
              </h3>

              <div
                className="gallery-scrollbar"
                style={{
                  flex: "1 1 0%",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  paddingRight: "8px",
                  WebkitOverflowScrolling: "touch",
                  minHeight: 0,
                  maxHeight: "100%", // Ensure the scroll area doesn't grow past parent
                }}
                tabIndex={0}
              >
                {gallery.data.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      maxWidth: "380px",
                      minWidth: "260px",
                      height: "220px",
                      minHeight: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 1px 8px rgba(0,0,0,0.09)",
                      alignSelf: "center",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollbar & Responsive Fix */}
      <style>{`
        @media (max-width: 900px) {
          .dual-gallery-section-flex {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .dual-gallery-section-flex > div {
            height: 400px !important;
          }
        }

        /* style scrollbar for gallery */
        .gallery-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #bbb #f9f9f9;
        }
        .gallery-scrollbar::-webkit-scrollbar {
          width: 12px;
          background: #f9f9f9;
        }
        .gallery-scrollbar::-webkit-scrollbar-thumb {
          background: #bbb;
          border-radius: 6px;
          border: 2px solid #f9f9f9;
        }
        .gallery-scrollbar::-webkit-scrollbar-track {
          background: #f9f9f9;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default DualGallerySection;
