const fs = require("fs");
const {
  cloudinaryDeleteImage,
  cloudinaryUploadImage,
} = require("../utils/cloudinary");

const uploadImages = async (req, res, next) => {
  try {
    const uploader = (path) => cloudinaryUploadImage(path, "Images");
    const urls = [];
    const files = req.files;
    console.log(files)
    for (const file of files) {
      const { path } = file;
      console.log(path);
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    // console.log(path)
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteImages = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImage(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  uploadImages,
  deleteImages,
};
