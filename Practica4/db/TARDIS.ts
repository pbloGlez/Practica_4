import mongoose from "npm:mongoose@7.6.4";
import { TARDIS } from "../types.ts";

const Schema = mongoose.Schema;

const TARDISchema = new Schema({
    idDimen: [{type : Schema.Types.ObjectId, ref: "dimensiones"}],
    anio : {type: Number, required: true},
    numReg: {type: Number, required: true},
    camuflaje: {type: String, required: true},
},
{timestamps: true},
);
export type TardisModelType = mongoose.Document & Omit<TARDIS,"id">;
export default mongoose.model<TardisModelType>("tardis", TARDISchema);