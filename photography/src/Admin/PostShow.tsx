import { useShow } from "@refinedev/core";
import { CircularProgress, Container, Paper, Typography, Box } from "@mui/material";

const PostShow = () => {
  const { queryResult } = useShow({ resource: "posts" });

  if (queryResult.isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  const post = queryResult.data?.data;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Post Details
        </Typography>
        <Typography variant="body1">
          <strong>ID:</strong> {post?.id}
        </Typography>
        <Typography variant="body1">
          <strong>Title:</strong> {post?.title}
        </Typography>
        <Typography variant="body1">
          <strong>Body:</strong> {post?.body}
        </Typography>
      </Paper>
    </Container>
  );
};

export default PostShow;
