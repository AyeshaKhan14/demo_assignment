import React, { useEffect, useState } from "react";
import { FilterSort } from "../FilterSort Components/FilterSort";
import { ProductCard } from "../ProductCard Component/ProductCard";
import { products } from "../../data/data.js";
import { NavBar } from "../NavBar Components/NavBar.jsx";

export const ProductList = () => {
  const [product, setProduct] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(product);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //filter part
    let filtered =
      selectedCategory === "All Categories"
        ? product
        : product.filter((el) => el.category === selectedCategory);

    //sort part
    if (sortOrder) {
      filtered = [...filtered].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else if (sortOrder === "desc") {
          return b.price - a.price;
        }
        return 0;
      });
    }

    //  search query
    if (searchQuery) {
      filtered = filtered.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortOrder, searchQuery, product]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <NavBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <FilterSort
        product={product}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <div className='w-full md:w-[80%] m-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((el) => <ProductCard key={el.id} el={el} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};
