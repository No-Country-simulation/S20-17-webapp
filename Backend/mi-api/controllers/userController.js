import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Todos los campos son obligatorios", success: false });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ message: "email ya registrado", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "Usuario creado con exito", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Todos los campos son obligatorios", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({
          message: "No existe un usuario registrado con ese email",
          success: false,
        });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(404)
        .json({ message: "Contraseña incorrecta", success: false });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
    };

    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Sesion iniciada con exito",
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (_, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 }).json({
      message: "Sesion cerrada con exito",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password");
        return res.status(200).json({
            user,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const profilePicture = req.file;
    let cloudResponse;
    if (profilePicture) {
      const fileUri = getDataUri(profilePicture);
      cloudResponse = await cloudinary.uploader.upload(fileUri);
    }

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "No existe un usuario con ese id", success: false });
    }

    
    if (profilePicture) user.profilePicture = cloudResponse.secure_url;

    await user.save();

    return res
      .status(200)
      .json({ user, message: "Perfil actualizado", success: true });
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "No existe un usuario con ese id",
                success: false,
            });
        }
        await User.findByIdAndDelete(userId);
        return res.status(200).json({
            message: "Usuario eliminado con exito",
            success: true,
        });

    } catch (error) {
        console.log(error);
    }
}
