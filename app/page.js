/* eslint-disable @next/next/no-img-element */

import ProductList from "@/components/ProductList";
import commerce from "../app/commerce";



// async  function getData() {
//   const {data : products} = await commerce.products.list();
//     // console.log(products);
// }

export default async function Home() {
  const {data : products} = await commerce.products.list();
  return (
    <main>
  <h1>Products</h1> 
  {/* <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img className="product-image" src={product.image.url} alt={product.name} />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.formatted_with_symbol}</p>
          </div>
        </div>
      ))}
    </div> */}
    <ProductList products={products}/>

    </main>
  );
}
