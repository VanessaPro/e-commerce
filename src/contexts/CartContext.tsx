import {createContext, ReactNode, useState} from 'react'
import {ProductProps} from '../pages/home'


interface CartContextDate{
    cart:CartProps[];
    cartAmount:number;
    addItemCart:(newItem: ProductProps) => void;
    removeItemCart:(product: CartProps) => void;
    total:string;
      
}

interface CartProps{
    id:number;
    title:string;
    description:string;
    price:number;
    cover:string;
    amount:number;
    total:number;
  }

  interface CartProviderProps {
    children:ReactNode;
  }


export const CartContext = createContext({} as CartContextDate)

function CartProvider({ children }: CartProviderProps){
    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("");

    

   function addItemCart(newItem: ProductProps) {
  const indexItem = cart.findIndex(item => item.id === newItem.id);

  if (indexItem !== -1) {
    let cartList = cart;

    cartList[indexItem].amount = cartList[indexItem].amount + 1;
    cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

    setCart(cartList);
    totalResultCart(cartList);
    return;
  }

  let date = {
    ...newItem,
    amount: 1,
    total: newItem.price * 1  
  };

  setCart(products => [...products, date]);
  totalResultCart([...cart, date]);
}

    function removeItemCart(product: CartProps) {
      const indexItem = cart.findIndex(item => item.id === product.id)
    
      if (cart[indexItem]?.amount > 1) {
        const cartList= cart;

        cartList[indexItem].amount = cartList[indexItem].amount -1;
        cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
   
        
        setCart(cartList);
        totalResultCart(cartList); 
        return;
      }

      const removeItem = cart.filter(item => item.id !== product.id)
      setCart(removeItem);
      totalResultCart(removeItem)
     

    }
    
    function totalResultCart(items: CartProps[]) {
      const result = items.reduce((acc, obj) => acc + obj.total, 0);
      const resultFormated = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    
      setTotal(resultFormated);
    }
      


    return(
        <CartContext.Provider 
         value={{
          cart, 
          cartAmount: cart.length, 
          addItemCart, 
          removeItemCart, 
          total
          }}
          >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;