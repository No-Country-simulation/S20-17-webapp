import {project} from '../models/project';

export const getProjects = async (req, res) => {
    try {
        const projects = await project.find();
        if (!projects) {
            return res.status(404).json({message: 'No hay proyectos'});
        }
        res.status(200).json(projects);       
        
    } catch (error) {
        console.log(error);
    }
}

export const createProject = async (req, res) => {
    try {
        const {title, description, category, projectImg} = req.body;
        if (!title || !description || !category || !projectImg) {
            res.status(404).json({message: 'Todos los campos son obligatorios'});
        }
        await project.create({title, description, category, projectImg});
        res.json({message: 'Proyecto creado con exito'});
    } catch (error) {
        console.log(error);
    }
}