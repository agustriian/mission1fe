const ProductCard = ({ title, rating, enrolled, level, price, image, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white shadow rounded-xl p-4 transition hover:shadow-lg"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{level}</p>
        <p className="text-sm text-gray-600">⭐ {rating} ({enrolled} enrolled)</p>
        <p className="text-primary font-bold">{price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  