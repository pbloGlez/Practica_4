//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import PersonaModel from "../db/personas.ts";
import PlanetaModel from "../db/planetas.ts";

const postPlaneta = async (req:Request, res: Response) => {
    try {
        const {personas} = req.body;
        if (!personas) {
            res.status(400).send("Personas requeridas");
            return;
        } 
        const hayPersonas = await Promise.all(personas.map(async (id: string) =>{
            if (mongoose.Types.ObjectId.isValid(id)) {
                const pExis = await PersonaModel.findById(id).exec();
                if(pExis){
                    return {id: pExis.id.toString(), nombre: pExis.nombre};
                }else{
                    res.status(400).send("persona no encontrada");
                    return;
                }
            }
        }));
        const newPlaneta = new PlanetaModel({idPersona : personas});
        await newPlaneta.save();
        res.status(200).send({
            id: newPlaneta.id.toString(),
            idPersona : newPlaneta.idPersona
        });
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
};
export default postPlaneta;

