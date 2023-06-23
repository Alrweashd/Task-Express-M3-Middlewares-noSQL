const express = require("express");
const router = express.Router();
const uploader = require("../../middlewares/uploader");
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");
router.param("postId", async (req, res, next, postId) => {
  try {
    const foundPost = await fetchPost(postId);
    if (!foundPost) return next({ status: 404, msg: "Post not found" });

    req.post = foundPost;
    next();
  } catch (error) {
    return next(error);
  }
});
router.get("/", postsGet);
router.post("/", uploader.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
