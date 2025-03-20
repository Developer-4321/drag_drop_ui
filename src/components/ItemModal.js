import React from "react";
import { Box, Modal, Typography, Button, TextField, IconButton } from "@mui/material";
import "../styles/styles.css";
import DeleteIcon from '@mui/icons-material/Delete';

const ItemModal = ({ open, onClose, selectedItem, handleNameChange, handleDelete, handleSave }) => {
  return (
    <Modal open={open} onClose={onClose}>
       <Box
          p={3}
          bgcolor="white"
          boxShadow={5}
          borderRadius={2}
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="h6">Edit or Delete</Typography>
          {selectedItem &&
            selectedItem.names.map((name, index) => (
              <Box key={index} display="flex" alignItems="center" gap={2} mb={1}>
                <TextField
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                />
               <IconButton
  color="error"
  onClick={() => handleDelete(selectedItem.id, index)}
>
  <DeleteIcon />
</IconButton>
              </Box>
            ))}
          <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2, mr: 1 }}>
            Save
          </Button>
          <Button variant="outlined" onClick={onClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
  );
};

export default ItemModal;
