function Card() {
  return (
    <div className="bg-black/10 cursor-pointer w-56 h-60 p-2 rounded-lg"> 
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg p-1 text-black text-xs m-2 px-3 py-0.5">Padded</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="padded teddy" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2">➕</div>
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">Padded Teddy</span>
        <span className="text-sm font-medium">$17000</span>
      </p>
    </div>
  )
}

export default Card;