export default function Product (product){
    return (
        <>
        <div key={product.id} className="product">
          <img className="product-image" src={product.image.url} alt={product.name} />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.formatted_with_symbol}</p>
          </div>
        </div>
        </>
    )
}