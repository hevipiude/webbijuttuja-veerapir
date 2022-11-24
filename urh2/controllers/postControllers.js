const Post = require("/Users/veera/Documents/Webi/urh2/models/Post.js");

exports.getAllAthletes = async (req, res, next) => {
  try {
    const [posts] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAthleteById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    const [[post]] = await Post.findById(postId);
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewAthlete = async (req, res, next) => {
  try {
    const {
      firstname,
      surname,
      nickname,
      birthyear,
      weight,
      photo_link,
      sport,
      acc,
    } = req.body;
    const post = new Post(
      firstname,
      surname,
      nickname,
      birthyear,
      weight,
      photo_link,
      sport,
      acc
    );
    await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteAthleteById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    await Post.deleteById(postId);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateAthleteById = async (req, res, next) => {
  try {
    const postId = Number(req.params.id);
    const {
      firstname,
      surname,
      nickname,
      birthyear,
      weight,
      photo_link,
      sport,
      acc,
    } = req.body;
    await Post.updateById(
      postId,
      firstname,
      surname,
      nickname,
      birthyear,
      weight,
      photo_link,
      sport,
      acc
    );
    res.status(200).json({ message: "Post updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
