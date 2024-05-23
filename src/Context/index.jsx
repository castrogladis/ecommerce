import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider ({children}) {
    //Shopping Cart, Counter
    const [count, setCount] = useState(0);

    //Product Detail, Open/Close
    const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false);
    const openProductDetail = () => setIsOpenDetailOpen(true);
    const closeProductDetail = () => setIsOpenDetailOpen(false)

    //Product Detail/ Show Product
    const [productToShow, setProductToShow] = useState({});
    
    //Shopping Cart, Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

     //Chekout Side Menu 
     const [isChekoutSideMenu, setIsChekoutSideMenu] = useState(false);
     const openChekoutSideMenu = () => setIsChekoutSideMenu(true);
     const closeChekoutSideMenu = () => setIsChekoutSideMenu(false)

       //Shopping Cart, Order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider
        value={
            {count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isChekoutSideMenu,
            openChekoutSideMenu,
            closeChekoutSideMenu,
            order,
            setOrder,
        }}>
            {children} 
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;