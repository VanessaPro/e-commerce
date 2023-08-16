export function Cart(){
    return(
        <div className="w-full max-w-7xlmx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300">
             <img src="https://virtualjoias.com/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/v/j/vj10266thumb.jpg?width=400&quality=100" alt="logo"  className="w-28"/>
             <strong>Preço:R$284,91</strong>

             <div className="flex items-center justify-center gap-3">
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    -
                </button>
                1
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                    +
                </button>
             </div>

              <strong className=" float-right">
                SubTotal: R$284,91
              </strong>
            </section>
            <p className="font-bold mt-4">Total:R$.1000</p>
        </div>
    )
}