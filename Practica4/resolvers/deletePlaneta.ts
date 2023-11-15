//@ts-ignore
import { Request, Response } from "npm:express@4.18.2"; 
import  PlanetaModel  from "../db/planetas.ts"; 
import  PersonaModel from "../db/personas.ts";

const delete_planeta = async (req: Request, res: Response) => { 
  try {
    const { id } = req.params; 
    const planeta = await PlanetaModel.findByIdAndDelete(id).exec(); 
    if (!planeta) { 

      res.status(404).send("planeta not found");

      return; 
    }
    if(planeta.idPersona !== null){
      const personasIds = planeta.idPersona;
        await personasIds.forEach(async (personaId) => {
        await PersonaModel.findByIdAndDelete(personaId).exec();
      });
   }
    res.status(200).send("planeta y personas relacionados con el planeta ",{id}," han sido borrados"); 
    } catch (error) {
        res.status(500).send(error.message); 
        return; 
    }
};

export default delete_planeta;