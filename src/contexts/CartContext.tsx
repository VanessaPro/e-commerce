import {createContext, ReactNode, useState} from 'react'
import {Home} from '../pages/home'
import { ProdutosProps } from '../pages/home/index';

interface CartContextData{
    cart:CartProps[];
    cartAmount:number;
    addItemCart:(newItem: ProdutosProps) => void;
    
    
}

interface CartProps{
    id:number;
    title:string;
    description:string;
    price:number;
    cover:string;
    total:number;
  }

  interface CartProviderProps {
    children:ReactNode;
  }


export const CartContext = createContext({} as CartContextData)

function CartProvider({children} : CartProviderProps){
     const [cart, setCart] = useState<CartProps[]>([])

     function addItemCart(newItem: ProdutosProps){
        //adiciona ao carrinho
        //se já existe ele no carrinho
        const indexItem= cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            // Se entrou apenas somamos +1 na quantidade e calculamos o total desse carrinho.
            let  cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount +1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            return;
        }

        // adicionar o item na lista
        let data = {
           ...newItem,
            amount:1,
            total: newItem.price

        }

        setCart(produtos => [...produtos,data])

     }



    return(
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart}}>
          {children}
        </CartContext.Provider>
    )
}

export default CartProvider;