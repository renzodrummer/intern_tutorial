const { saveUser, getUsers, getOneUser } = require("../service/user.service");

exports.createUser = async (req, res) => {
  const result = await saveUser(req.body);

  res.status(201).json({
    status: "success",
    data: result,
  });
};

exports.getUser = async (req, res) => {
  const users = await getUsers();

  console.log(users)

  res.status(200).json({
    status: "success",
    users,
  });
};

exports.getOneUser = (req, res) => {
  const user = getOneUser(req.params.id)

  res.status(200).json({
    status: "success",
    user,
  });
};
