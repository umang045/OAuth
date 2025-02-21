//delete one
exports.deleteOne = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByPk(req.params.id);
    if (data) {
      await data.destroy();
      res.status(200).json({ message: " deleted successfully" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

//get One
exports.getOne = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByPk(req.params.id);
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error(error);
  }
};

//get all
exports.getAll = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findAll();
    res.status(200).json({ data: data });
  } catch (error) {
    throw new Error(error);
  }
};

//update one
exports.updateOne = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByPk(req.params.id);
    if (data) {
      const updatedData = await data.update(req.body);
      res.status(200).json({ message: "updated successfully" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

//add one
exports.addOne = (Model) => async (req, res, next) => {
  try {
    const data = await Model.create(req.body);
    res.status(200).json({ message: "added successfully", data: data });
  } catch (error) {
    throw new Error(error);
  }
};
