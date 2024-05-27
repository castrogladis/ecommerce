import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout"
import  OrdersCard  from "../../Components/OrdersCard"


function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='w-80 flex relative justify-center items-center'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>

      {
        context.order.map((order, index) =>(
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard 
          totalPrice={order.totalPrice} 
          totalProducts={order.totalProducts}/> 
          </Link>    
        ))
      }
     
    </Layout>
  )
}

export default MyOrders;
  