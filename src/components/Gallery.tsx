const images = [
  // Your real images
  "https://i.postimg.cc/pVkJVqvB/gallery-12.jpg",
  "https://i.postimg.cc/GpsXHYKt/gallery-1.jpg",
  "https://i.postimg.cc/mrbrrNB9/gallery-2.jpg",
  "https://i.postimg.cc/xd0ddynJ/gallery-3.jpg",
  "https://i.postimg.cc/0N8NNdPJ/gallery-4.jpg",
  "https://i.postimg.cc/mhfLW7mc/gallery-5.jpg",
  "https://i.postimg.cc/vm3ZxgZj/gallery-6.jpg",
  "https://i.postimg.cc/d04VZk0F/gallery-7.jpg",
  "https://i.postimg.cc/Tws2Qzmj/gallery-8.jpg",
  "https://i.postimg.cc/RCjKZ88t/gallery-9.jpg",
  "https://i.postimg.cc/bNkbDgc9/gallery-10.jpg",
  "https://i.postimg.cc/bNkbDgcQ/gallery-11.jpg",
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
