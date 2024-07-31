import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/products/search`,
          {
            params: { query },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Kết quả tìm kiếm cho "{query}"
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <img
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold">{product.price} VND</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
};

export default SearchResults;
