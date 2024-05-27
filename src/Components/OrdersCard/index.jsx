import { getCurrentDate } from "../../utils/date";
 import { ChevronRightIcon } from "@heroicons/react/24/solid"

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;


  return (
    <div className="w-80 p-4 flex justify-between items-center mb-3 border border-black rounded-lg mt-2">
      <div className="w-full flex justify-between items-center">
        <p className="flex flex-col">
         <span className="font-medium">Fecha: {getCurrentDate()}</span>
         <span className="font-mdium">{totalProducts} articles</span>
        </p>
       <p className="flex items-center gap-2"> 
        <span className="font-medium text-2xl">${totalPrice}</span>
        < ChevronRightIcon  className="w-4 h-4 text-black cursor-pointer"/>
      </p>
      </div>
    </div>
  )
}

export default OrdersCard;