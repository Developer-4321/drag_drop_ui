import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/styles.css";

const DraggableItem = ({ leftItems, handleDragStart }) => {
  return (
    <Box className="container-box">
    <Typography variant="h6" className="title-text">
Available Items</Typography>
          {leftItems&&leftItems.map((item) => (
            <Box
              key={item.id}
              p={1}
              m={1}
              bgcolor="#d1e7ff"
              borderRadius={1}
              textAlign="center"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item.name}
            </Box>
          ))}
        </Box>   
  );
};

export default DraggableItem;
