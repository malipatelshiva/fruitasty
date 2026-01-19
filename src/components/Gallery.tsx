const images = [
  // Your real images
  "https://i.postimg.cc/pVkJVqvB/gallery-12.jpg",
  "https://i.postimg.cc/GpsXHYKt/gallery-1.jpg",
  "https://i.postimg.cc/mrbrrNB9/gallery-2.jpg",

  // // Random placeholder images (safe)
  // "https://picsum.photos/600/400?random=1",
  // "https://picsum.photos/600/400?random=2",
  // "https://picsum.photos/600/400?random=3",
  // "https://picsum.photos/600/400?random=4",
  // "https://picsum.photos/600/400?random=5",
  // "https://picsum.photos/600/400?random=6",
  // "https://picsum.photos/600/400?random=7",
  // "https://picsum.photos/600/400?random=8",
  // "https://picsum.photos/600/400?random=9",
];


const Gallery = () => {
  return (
    <section id="gallery" style={styles.section}>
      <h2 style={styles.title}>Gallery</h2>

      <div style={styles.grid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            style={styles.image}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 24px",
    textAlign: "center" as const,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover" as const,
    borderRadius: "14px",
    transition: "transform 0.3s ease",
  },
};

export default Gallery;
