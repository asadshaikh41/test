const express=require("express");
const router=express.Router();
const userController=require('../controllers/usercontroller');


router.post('/create', userController.createUser);
router.get("/all",userController.getAllUsers);
router.get("/:id",userController.getUserById);
router.put("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUser);


module.exports = router;
