const db = require("../config/db.config");
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    username: "Renzo",
    password: "1234",
    id: `${uuidv4()}`,
  },
];

exports.saveUser = async (user) => {
  try {
    const { username, password } = user;
    const users = await db.users.create({
      username,
      password,
    });

    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUsers = async () => {
  try {
    const users = await db.users.findAll();

    return users;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOneUser = (id) => {
  const user = users.find((user) => user.id === id);

  if (user == undefined) {
    return "User not found!";
  }

  return user;
};
