import express from "express";
import { deleteUser, login, logOut, register } from "../controller/user.controller.js";
import { authentication } from "../middlewares/user.middleware.js";
import { bookmark, removeBookmark } from "../controller/user.bookmark.js";

const userRoutes = express.Router();

userRoutes.post("/register",register);
userRoutes.post("/login",login);
userRoutes.post("/logOut",logOut);
userRoutes.delete("/:id",authentication, deleteUser);
userRoutes.post("/login/bookmark", bookmark );
// userRoutes.delete("login/unbookmark/:id",removeBookmark);   ////either of them
userRoutes.delete("/login/unbookmark/:emailId/:bookmarkId", removeBookmark);


export default userRoutes;