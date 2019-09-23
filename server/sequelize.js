const Sequelize = require("sequelize");
const UserModel = require("./Models/User");
const PostModel = require("./Models/Post");
const TagModel = require("./Models/Tag");

const sequelize = require("../db/database");

const User = UserModel(sequelize, Sequelize);

const PostTag = sequelize.define("post_tag", {});
const Post = PostModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);

Post.belongsToMany(Tag, { through: PostTag, unique: false });
Tag.belongsToMany(Post, { through: PostTag, unique: false });
User.belongsTo(User);

sequelize
  .sync({ force: true })
  .then(() => console.log(`Created database and Table `))
  .catch(err => {
    console.log(`FAILED:${err}`);
  });

module.exports = {
  User,
  Post,
  Tag
};
