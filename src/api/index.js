import axios from "axios"

const url = "https://social-w-b.herokuapp.com/posts"

export const createPost = (post) => axios.post(url, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const fetchPosts = () => axios.get(url);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);