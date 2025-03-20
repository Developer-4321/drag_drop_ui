import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/styles.css";

const DroppableArea = ({ rightItems,handleDrop,handleEdit }) => {
    console.log("items",rightItems);
    
  return (
      <Box
              p={2}
              className="selected-container"

              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
                   <Typography variant="h6" className="selected-title">
                   Selected Items</Typography>
              {rightItems&&rightItems.map((item) => (
                <Box
                  key={item.id}
                  className="selected-item"

                  onClick={() => handleEdit(item)}
                  >
                  {item.name} ({item.count})
                </Box>
              ))}
            </Box> 
  );
};

export default DroppableArea;
