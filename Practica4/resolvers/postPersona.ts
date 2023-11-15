//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import  PersonaModel from "../db/personas.ts";

const addPersona = async (req: Request, res: Response) =>{
    try{
        const {nombre} = req.body;
        if (!nombre) {
            res.status(400).send("Nombre requerido");
            return;
        }
        const newPersona = new PersonaModel({
            nombre
        });
        await newPersona.save();

        res.status(200).send({
            id : newPersona.id.toString(),
            nombre : newPersona.nombre
        });
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};
export default addPersona;
