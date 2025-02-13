import { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

const ExhibitionList = () => {
  // Dummy data
  const [exhibitions, setExhibitions] = useState([
    { id: 1, title: "Modern Art Exhibition" },
    { id: 2, title: "Classic Paintings Showcase" },
    { id: 3, title: "Futuristic Sculptures" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [formValues, setFormValues] = useState({ title: "" });

  // Open Modal for Create/Edit
  const openDialog = (exhibition = null) => {
    setIsEditing(!!exhibition);
    setSelectedExhibition(exhibition);
    setFormValues(exhibition ? { title: exhibition.title } : { title: "" });
    setIsDialogOpen(true);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Handle Submit (Create / Edit)
  const handleSubmit = () => {
    if (isEditing) {
      setExhibitions((prev) =>
        prev.map((item) =>
          item.id === selectedExhibition.id ? { ...item, ...formValues } : item
        )
      );
    } else {
      setExhibitions((prev) => [
        ...prev,
        { id: prev.length + 1, ...formValues },
      ]);
    }
    setIsDialogOpen(false);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setExhibitions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exhibitions
      </Typography>
      <Button variant="contained" color="primary" onClick={() => openDialog()}>
        Add Exhibition
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exhibitions.map((exhibition) => (
              <TableRow key={exhibition.id}>
                <TableCell>{exhibition.id}</TableCell>
                <TableCell>{exhibition.title}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => openDialog(exhibition)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginLeft: 1 }}
                    onClick={() => handleDelete(exhibition.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>{isEditing ? "Edit Exhibition" : "Add Exhibition"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {isEditing ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ExhibitionList;
