import { XMarkIcon } from "@heroicons/react/24/solid"

function OrderCard(props)   {
  const { id, imageUrl, title, price, handleDelete} = props;
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
        onClick={() => handleDelete(id)} //eliminar orden
          className="w-4 h-4 text-black">
        </XMarkIcon>
      </div>
    </div>
  )
}

export default OrderCard;