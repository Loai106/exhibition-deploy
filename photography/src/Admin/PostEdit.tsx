import { useForm } from "@refinedev/core";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const PostEdit = () => {
  const { register, handleSubmit, formState, saveButtonProps } = useForm({
    resource: "posts",
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Edit Post
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Title"
            {...register("title", { required: "Title is required" })}
            error={!!formState.errors.title}
            helperText={formState.errors.title?.message}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={saveButtonProps.disabled}
          >
            {saveButtonProps.disabled ? <CircularProgress size={24} /> : "Update"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostEdit;
