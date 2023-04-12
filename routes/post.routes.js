const express = require("express");
const { setPost, getPosts, editPost, deletePost, likePost, disLikePost } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", disLikePost);

module.exports = router;