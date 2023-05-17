import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading...Please wait..."
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredPropertyItem">
              <img
                src={item.images[0] || ""}
                alt=""
                className="featuredPropertyImg"
              />
              <span className="featuredPropertyName">{item.name}</span>
              <span className="featuredPropertyCity">{item.city}</span>
              <span className="featuredPropertyPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="featuredPropertyRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
