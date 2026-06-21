import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=8"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Photo Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
        }}
      >
        {data.map((photo) => (
          <div key={photo.id}>
            <img
              src={`https://picsum.photos/150?random=${photo.id}`}
              alt={photo.title}
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid #ccc",
              }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;