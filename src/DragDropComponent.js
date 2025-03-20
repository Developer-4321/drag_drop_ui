import React, { useState } from "react";
import { Box, Modal, Typography, Button, TextField } from "@mui/material";
import ItemModal from "./components/ItemModal";
import DraggableItem from "./components/DraggableItem";
import DroppableArea from "./components/DroppableArea";

const DragDropComponent = () => {
  const [leftItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [rightItems, setRightItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));
    setRightItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, count: i.count + 1, names: [...i.names, item.name] }
            : i
        );
      } else {
        return [...prev, { ...item, count: 1, names: [item.name] }];
      }
    });
  };

  const handleEdit = (item) => {
    setSelectedItem({ ...item });
    setOpen(true);
  };

  const handleDelete = (index) => {
    setSelectedItem((prev) => {
      const updatedNames = prev.names.filter((_, i) => i !== index);
      return { ...prev, names: updatedNames, count: updatedNames.length };
    });
  };

  const handleNameChange = (index, newName) => {
    setSelectedItem((prev) => {
      const updatedNames = [...prev.names];
      updatedNames[index] = newName;
      return { ...prev, names: updatedNames };
    });
  };

  const handleSave = () => {
    setRightItems((prev) =>
      prev.map((i) => (i.id === selectedItem.id ? selectedItem : i))
    );
    setOpen(false);
  };
const onClose=()=>{
    setOpen(false)
}
console.log("rightitems",rightItems);

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    sx={{
      background: "linear-gradient(135deg, #f0f0f0, #cfd9df)",
    }}
  >     
      <Box display="flex" gap={4} p={4}>
        {/* Left Panel */}
       
        <DraggableItem leftItems={leftItems} handleDragStart={handleDragStart} />
          {/* Right Panel */}
          <DroppableArea rightItems={rightItems} handleDrop={handleDrop} handleEdit={handleEdit}/>
        
  </Box>
   

      {/* Modal Popup */}
     <ItemModal open={open} onClose={onClose} selectedItem={selectedItem} handleNameChange={handleNameChange} handleDelete={handleDelete} handleSave={handleSave}/>
    </Box>
  );
};

export default DragDropComponent;
