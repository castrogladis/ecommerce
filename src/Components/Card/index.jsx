import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from '../../Context';

function Card({ data }) {
  const context = useContext(ShoppingCartContext) //lee el estado global

  //Product Detail/ Show Product
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  //Shopping Cart, Add products to cart
  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData]) //... traes lo que ya esta que seria el state y sumes lo que estamos agregando
    context.openChekoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-black/70 w-6 h-6 rounded-full m-2 p-1 cursor-pointer">
          <CheckIcon className="w-6 h-6 text-white"> </CheckIcon>
        </div>
      )
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
          onClick={(event) => addProductsToCart(event, data)}>
          <PlusIcon className="w-6 h-6 text-black"> </PlusIcon>
        </div>
      )
    }
  }


  return (
    <div
      className="bg-white w-56 h-60 p-2 rounded-lg"
      onClick={() => showProduct(data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg p-1 text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt={data.category}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between truncate">
        <span className="text-sm font-light">{data.category}</span>
        <span className="text-sm font-medium">${data.price}</span>
      </p>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;