import express from "express";

import mongoose from "mongoose";
import Post from "../model/post.js";

const router = express.Router();

//get
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    console.log(error);
  }
});

//get one
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//create
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const createdPost = await Post.create(post);
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, creator, date } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send({ message: "Post bulunamadi" });
    
    const updatedPost = { title, content, creator, date, _id: id };
    await Post.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);

  } catch (error) {
    console.log(error);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.json({message: 'Post silindi'})
  } catch (error) {
    console.log(error);
  }
  
});

export default router;
