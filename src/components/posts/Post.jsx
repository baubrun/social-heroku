import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";

import { deletePost, likePost } from "../../redux/actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.file}
        title={post.title}
      />

      <Box className={classes.overlay}>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2">
          {moment(post.DateCreated).fromNow()}
        </Typography>
      </Box>

      <Box className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          onClick={() => {
            setCurrentId(post._id);
          }}
          size="small"
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Box>

      <Box className={classes.details}>
        <Typography color="textSecondary" component="h2" variant="body2">
          {post.tags.map((tag) => `#${tag.trim()} `)}
        </Typography>
      </Box>

      <Typography
        className={classes.title}
        component="h2"
        gutterBottom
        variant="h5"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography color="textSecondary" component="p" variant="body2">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          onClick={() => dispatch(likePost(post._id))}
        >
          <FavoriteIcon color="primary" fontSize="small" />
          &nbsp;Likes&nbsp; {post.likes}
        </Button>

        <Button
          size="small"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteForever fontSize="small" />
          &nbsp;Delete&nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
