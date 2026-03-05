import { useState, useEffect } from "react";
import Layout from "./Layout";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then(res => {
        if (!res.ok) throw new Error("wrong with getting cat facts");
        return res.json();
      })
      .then(data => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Layout title="Cat Facts">
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status">{error}</p>}

      {!loading && !error && (
        <ul className="simple-list">
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default CatFacts;