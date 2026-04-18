import "./ProductCard.css";

function ProductCard({product}){
   return (
        <div className="product-container">
            
            <h2 className="product-title">{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p className="product-availability">Availability:{product.Availability}</p>
        <p className="product-description">{product.description}</p></div>
      );
}

export default ProductCard;