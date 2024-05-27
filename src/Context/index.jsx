import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider ({children}) {
    //Shopping Cart, Counter
    const [count, setCount] = useState(0);

    //Product Detail, Open/Close
    const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false);
    const openProductDetail = () => setIsOpenDetailOpen(true);
    const closeProductDetail = () => setIsOpenDetailOpen(false);

    //Product Detail/ Show Product
    const [productToShow, setProductToShow] = useState({});
    
    //Shopping Cart, Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

     //Chekout Side Menu 
     const [isChekoutSideMenu, setIsChekoutSideMenu] = useState(false);
     const openChekoutSideMenu = () => setIsChekoutSideMenu(true);
     const closeChekoutSideMenu = () => setIsChekoutSideMenu(false);

    //Shopping Cart, Order
    const [order, setOrder] = useState([]);

    //Get Products
    const [items, setItems] = useState(null); 
    const [filteredItems, setFilteredItems] = useState(null);

        //Get Products by title, input(home)
    const [searchByTitle, setSearchByTitle] = useState("");

      //Get Products by category, input(home)
      const [searchByCategory, setSearchByCategory] = useState("");


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(data => {
             console.log(data); // Verifica la estructura de los datos aquí
            setItems(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
    
      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    
      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])

    
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
            items,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children} 
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;

