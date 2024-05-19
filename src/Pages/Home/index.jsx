// import { useState, useEffect } from "react";
// import Layout from "../../Components/Layout";
// import Card from "../../Components/Card";
 
// function Home() {
// const[items, setItems] = useState([])

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products")
//    .then(res=>res.json())
//    .then(json=> console.log(json))
//    .then(data => setItems(data))
   
// }, []);

//     return(
//       <Layout>
//         Home
//         <Card />
//         {
//           items?.map(item => (
//             <Card key={item.id} data={item}/>
//           ))
//         }
       
//       </Layout>
//     ) 
//   }
//   export default Home;

import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

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
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {items.length > 0 ? (
        items.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) : (
        <p>Loading items...</p>
      )}
      </div>
    </Layout>
  );
}

export default Home;