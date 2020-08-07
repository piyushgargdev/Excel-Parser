const User = require('../models/user.model');

/**
 * @function saveToDb
 * @param {Array} users
 */
function saveToDb(users) {
  if (users.length === 0) return;
  return users.map((user) => new User({
    name: user.Name, email: user.Email, mobile: user.Mobile, gender: user.Gender,
  }).save());
}

function getAllUsers() {
  return User.find({});
}

module.exports = {
  saveToDb,
  getAllUsers,
};
