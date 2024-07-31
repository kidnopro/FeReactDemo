import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Định nghĩa kiểu Product
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: {
    name: string;
  };
}

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === "") {
        setResults([]);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/products`,
          {
            params: { query },
          }
        );
        console.log("API response:", response.data); // Thêm dòng này để kiểm tra dữ liệu trả về
        setResults(response.data);
      } catch (err) {
        setError("Có lỗi xảy ra khi tìm kiếm");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        Kết quả tìm kiếm cho: "{query}"
      </h1>
      {loading && <p>Đang tải...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results.length === 0 && !loading && !error && (
        <p>Không có sản phẩm nào phù hợp.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 rounded-lg p-4"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category.name}</p>
            <p className="text-gray-800 font-bold">
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
