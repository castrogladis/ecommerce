import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data); // Verifica la estructura de los datos aquí
        setItems(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-3 grid-cols-3 w-full max-w-screen-lg">
      {items.length > 0 ? (
        items.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) : (
        <p>Loading items...</p>
      )}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;