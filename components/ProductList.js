import Link from "next/link"
import Product from "./Products"

export default function ProductList({products}){
    if(!products) return null

    return (
       <ul>
        {
            products.map((product)=>(
                <li key={product.id}>
                    {/* <Link href={`products/${product.permalink}`}>    */}
                    <Link href={{
                        pathname : `products`,
                        query : {link :`${product.permalink}`,
                                 id :`${product.id}` }
                    }}>   
                                    <Product {...product}/>
                    </Link>
                </li>
            ))
        }
       </ul>
    )
}