import { XMarkIcon } from "@heroicons/react/24/solid"

function OrderCard(props)   {
  const { id, imageUrl, title, price, handleDelete, category  } = props;

 let renderXMarkIcon;
  if(handleDelete) {
    renderXMarkIcon =<XMarkIcon onClick={() => handleDelete(id)} //eliminar orden
     className="w-4 h-4 text-black"> </XMarkIcon>
  }    
  
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 flex justify-center items-center">
          <img className="w-full h-full rounded-lg object-contain" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light first-letter:uppercase">{category}</p>
      </div>
      <div className="flex items-center gap-3 flex-col">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard;