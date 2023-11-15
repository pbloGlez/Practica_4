//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import  PersonaModel  from "../db/personas.ts";

const deletePersona = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const persona = await PersonaModel.findByIdAndDelete(id).exec();
        if (!persona) {
            res.status(404).send("No se ha encontrado a la persona");
            return;
        }
        res.status(200).send("Persona borrada");
    } catch (error) {
        res.status(500).send(error.message); 
    }
};
export default deletePersona;
