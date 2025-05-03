const { User } = require('../models');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: "error", err })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users)

    } catch (err) {
        res.status(500).json({ message: "error", err })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
        if (!users) {
            return res.status(404).json("user not found");
        } else {
            res.status(200).json(users)
        }

    } catch (err) {
        res.status(500).json({ message: "error", err })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
        if (!users) {
            return res.status(404).json("user not found")
        } else {
            await users.update(req.body);
            res.json({ message: "user updated successfully", users })
        }

    } catch (err) {
        res.status(500).json({ message: "error", err })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id);
        if (!users) {
            return res.status(404).json("User not found")
        } else {
            await users.destroy();
            res.sendStatus({ message: "user deleted sucessfully" })
        }

    } catch (error) {
        res.status(500).json({ message: "error", error })

    }
}