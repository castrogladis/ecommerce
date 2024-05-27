import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }else {
        return (
          <div>There is no coincidence</div>
        )
      }
    } 
  


  return (
    <Layout>
      <div className="w-80 flex relative justify-center items-center">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        className="absolute right-0 mr-2 mt-1 w-60 p-2 rounded-lg border border-black focus:outline-none"
        type="text" placeholder="Search a product"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
    
        <div className="grid gap-3 grid-cols-3 w-full max-w-screen-lg">
          {renderView()}
        </div>
      
      <ProductDetail />
    </Layout>
  );
}

export default Home;
