import React from "react";
import { Stack } from "@mui/material";
import './Sidebar.css';

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{ 
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC15",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "white", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span className="sp-text" style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;