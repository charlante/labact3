import "./App.css";

function Products(props) {
  return (
    <div className="grid-container">
      {props.products.map((product) => (
        <div key={product.name} className="grid-item">
          <img
            src={process.env.PUBLIC_URL + "/photos/" + product.photoName}
            alt={product.name}
          />
          <div className="gridnameprice">
            <h3>{product.name}</h3>
            <h2>{product.price}</h2>
          </div>

          <div className="small-grid">
            {product.quantity > 0 ? (
              <>
                <p className="products-p">Stock: {product.quantity}</p>
                <button className="view-product-button">View Album</button>
              </>
            ) : (
              <p className="products-p">Sold Out</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
