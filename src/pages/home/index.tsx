import {useEffect, useState} from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {api} from '../../services/api'


interface ProdutosProps{
  id:number;
  title:string;
  description:string;
  price:number;
  cover:string;
}
      export function Home() {
        const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
        

            useEffect(() => {
              async function getProdutos() {
                try {
                  const response = await api.get("produto")   //await api.get("/produtos")
                  setProdutos(response.data);
                } catch (error) {
                  console.error("Erro ao buscar produtos:", error);
                  
                }
              }

              getProdutos();
            }, []);

          return (
            <div>
              
            <main className="w-full max-w-7xl px-4 mx-auto">
             <h1 className="font-bold text-2xl mb-4 mt-10 text-center ">Produtos em alta</h1>
             <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
                {produtos.map( (produtos) =>(

                  <section  key={produtos.id} className="w-full">
                  <img className='w-full rounded-lg max-h-70 mb-2' src={produtos.cover} alt={produtos.title}
                  />
                  <p className='font-medium mt-1 mb-2'>{produtos.title}</p>

                  <div className='flex gap-3 items-center'>
                    <strong className='text-zinc-700/90'>
                     {produtos.price.toLocaleString("pt-BR",{
                      style:"currency",
                      currency:"BRL"
                     })}
                    </strong>
                    <button className='bg-zinc-900 p-1 rounded ' >
                      <BsCartPlus size={20} color="#fff"/>
                    </button>  

                  </div>               
                  </section>
                ))}

             </div>
            </main>
             
        </div>
    );
}