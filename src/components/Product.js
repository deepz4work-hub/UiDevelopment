import useProductList from "../hooks/useProductList";

const Product = () => {
  const { products, loading, error } = useProductList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="products">
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="product-card" style={{ position: 'relative' }}>
            {item.rating && (
              <div className="product-rating" style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', alignItems: 'center', zIndex: 2 }}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} style={{ color: i < Math.round(item.rating.rate) ? '#f5a623' : '#ddd', fontSize: '1.1rem', marginRight: '2px' }}>
                    ★
                  </span>
                ))}
              </div>
            )}
            {item.image && (
              <img src={item.image} alt={item.title} className="product-image" />
            )}
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">${item.price}</p>
              {/* Description removed as requested */}
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Product;
