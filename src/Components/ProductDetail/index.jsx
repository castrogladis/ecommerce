import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from "@heroicons/react/24/solid"
import "./style.css"

function ProductDetail() {
  const context = useContext(ShoppingCartContext) //lee el estado global

  return (
    <aside className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0  bg-white border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <XMarkIcon
            className="w-6 h-6 text-black"
            onClick={() => context.closeProductDetail()}>
          </XMarkIcon>
        </button>
      </div>

      <figure className='px-5'>
        <img
          className=' w-full h-full rounded-lg object-cover'
          src={context.productToShow.image}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-4'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm  '>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail;