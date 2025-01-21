import { project } from "../models/project";

export const getProjects = async (req, res) => {
  try {
    const projects = await project.find();
    if (!projects) {
      return res.status(404).json({ message: "No hay proyectos" });
    }
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (req, res) => {
    try {
      const { title, description, category } = req.body;
      const projectImg = req.file;
  
      
      if (!title || !description || !category || !projectImg) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
      }
  
      let cloudResponse;
      if (projectImg) {
        const fileUri = getDataUri(projectImg);
        cloudResponse = await cloudinary.uploader.upload(fileUri);
        if (!cloudResponse) {
          return res.status(500).json({ message: "Error al subir la imagen" });
        }
      }
  
      await project.create({ 
        title, 
        description, 
        category, 
        projectImg: cloudResponse.secure_url 
      });
  
      res.status(201).json({ message: "Proyecto creado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error del servidor" });
    }
  };
  
