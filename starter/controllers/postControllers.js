const Post = require("/Users/veera/Documents/Webi/starter/models/Post.js");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    const [[post]] = await Post.findById(postId);
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const post = new Post(title, body);
    await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    await Post.deleteById(postId);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePostById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    const { title, body } = req.body;
    await Post.updateById(postId, title, body);
    res.status(200).json({ message: "Post updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
