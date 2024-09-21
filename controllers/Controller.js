import Post from "../models/Models.js";

const PostData = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: "success",
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.errors,
    });
  }
};

const GetData = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      status: "success",
      data: posts,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "id invalid",
    });
  }
};

const GetDataById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "failed",
        message: "Post tidak ditemukan",
      });
    }
    res.status(200).json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message || "Gagal mendapatkan data",
    });
  }
};

const UpdateData = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      status: "success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message || "Gagal mendapatkan data",
    });
  }
};

const DeleteData = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: "success",
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message || "Gagal mendapatkan data",
    });
  }
};

export { PostData, GetData, GetDataById, UpdateData, DeleteData };
