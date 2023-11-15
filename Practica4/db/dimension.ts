import mongoose from "npm:mongoose@7.6.4";
import { Dimensiones } from "../types.ts";

const Schema = mongoose.Schema;

const DimensionSchema = new Schema({
    idPlaneta: [{type: Schema.Types.ObjectId, ref: "planetas"}],
},
{timestamps: true}
);

export type DimensionModelType = mongoose.Document & Omit<Dimensiones, "id">;
export default mongoose.model<DimensionModelType>("dimensiones", DimensionSchema);