import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import OrderCard from "../../Components/OrderCard"
import Layout from "../../Components/Layout";
import Counter from '../../Components/Counter';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currenthPath = window.location.pathname; //buscaremos la ruta de mis orden para luego pintarla en mis ordenes
  let index = currenthPath.substring(currenthPath.lastIndexOf("/") + 1) //nos arroja dependiendo de la url lo que sigue de l ultimo / app :ip arregla la rl de las ordenes
 if (index === "last") index = context.order?.length -1
    return (
    <Layout>
      <div className='w-80 flex relative justify-center items-center mb-4'>
        <Link to={"/my-orders"} className='absolute left-0'> 
        <ChevronLeftIcon className="w-4 h-4 text-black cursor-pointer"/> </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-60'>
      {
        context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id} //eliminar la orden
            category={product.category} 
            imageUrl={product.image}
            price={product.price}
          />
      
        ))
      }
      </div> 
    </Layout>
    )
  }
  
  export default MyOrder;
  