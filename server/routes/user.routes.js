const UserController = require("../controllers/user.controller");

module.exports = function(app){
  app.get("/api/findAll/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser);
  app.delete("/delete/:id", UserController.deleteAnExistingUser);
};