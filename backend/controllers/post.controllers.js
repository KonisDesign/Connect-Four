const mongoose = require('mongoose');
const PostModel = require("../models/post.models");

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts)
}

module.exports.setPosts = async (req, res) => {
    if (!req.body.Game) {
        res.status(400).json({message: "Merci d'ajouter un nom"})
    }

    const post = await PostModel.create({
        Game: req.body.Game,
        Board: req.body.Board,
        Who: req.body.Who,
    })
    res.status(200).json(post)
};

module.exports.editPost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)

        const updatedPost = await PostModel.findByIdAndUpdate(
            post,
            req.body,
            {new: true}
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        console.error('editPost error:', err);
    }
}

module.exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({message: "Le contact n'éxiste pas"})
        return;
    }
    
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Le contact à été supprimé"})
}