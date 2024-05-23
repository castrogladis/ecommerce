import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { totalPrice } from '../../utils';
import OrderCard from "../OrderCard"
import "./style.css"

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext) //lee el estado global

  //Remove my order, elimninar orden
  const handleDelete = (id) => {
    const filtereProduct =  context.cartProducts.filter(product => product.id != id ) //retornando la misma lista que ya tenemmos en el carrito sin los que coinciden con el id
    context.setCartProducts(filtereProduct)//modificamos cartProducts y le enviamos los elementos filtrados
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: "23.05.2024",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
  } 

  return (
    <aside className={`${context.isChekoutSideMenu ? "flex" : "hidden"} checkout-side-menu bg-white  flex-col fixed right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          < XMarkIcon className="w-6 h-6 text-black"
            onClick={() => context.closeChekoutSideMenu()}
          ></XMarkIcon>
        </button>
      </div>
      <div className='px-4 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id} //eliminar la orden
            title={product.title} 
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }
      </div> 
      <div className='px-4 mb-4'>
        <p className='flex justify-between items-center mb-4'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <button 
        className='w-full bg-black py-3 text-white rounded-lg'
        onClick={() =>handleCheckout()}>Ckeckout</button>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;

