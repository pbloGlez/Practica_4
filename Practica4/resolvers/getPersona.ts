//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import PersonaModel  from "../db/personas.ts";

const getPersona = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const persona = await PersonaModel.findById(id).exec();
        if (!persona) {
            res.status(404).send("No se han encontrado personas");
            return;
        }
        res.status(200).send({
            id : persona.id.toString(),
            nombre : persona.nombre
        });
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};
export default getPersona;