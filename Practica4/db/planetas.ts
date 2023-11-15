import mongoose from "npm:mongoose@7.6.4";
import { Planeta } from "../types.ts";

const Schema = mongoose.Schema;

const PlanetaSchema = new Schema({
    idPersona: [{type: Schema.Types.ObjectId, ref: "personas"}]
},
{timestamps:true}
);

export type PlanetaModelType = mongoose.Document & Omit<Planeta,"id">;
export default mongoose.model<PlanetaModelType>("planetas", PlanetaSchema);