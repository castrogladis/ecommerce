// function Card( data ) {
//   return (
//     <div className="bg-black/10 cursor-pointer w-56 h-60 p-2 rounded-lg"> 
//       <figure className="relative mb-2 w-full h-4/5">
//         <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg p-1 text-black text-xs m-2 px-3 py-0.5">{data.data.category?.name}</span>
//         <img className="w-full h-full object-cover rounded-lg"  src={data.data.images[0]} alt="padded teddy" />
//         <div className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2">➕</div>
//       </figure>

//       <p className="flex justify-between">
//         <span className="text-sm font-light">Padded Teddy</span>
//         <span className="text-sm font-medium">$17000</span>
//       </p>
//     </div>
//   )
// }

// export default Card;

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function Card({ data }) {
 const context = useContext(ShoppingCartContext) //lee el estado global

  return (
    <div className="bg-wshite w-56 h-60 p-2 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg p-1 text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt={data.title}
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2 cursor-pointer"
        onClick={ () => context.setCount(context.count + 1)}>
          ➕
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
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