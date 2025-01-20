import { User } from "../models/User";

export const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
}

export const getUsers = async () => {
    return await User.find();
}

export const getUserById = async (id) => {
    return await User.findById(id);
}

export const login = async (email, password) => {
    return await User.findOne({ email, password });
}

