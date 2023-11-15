import express from "npm:express@4.18.2";
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import mongoose from "npm:mongoose@7.6.3";
import addPersona from "./resolvers/postPersona.ts";
import getPersona from "./resolvers/getPersona.ts";
import deletePersona from "./resolvers/deletePersona.ts";
import postPlaneta from "./resolvers/postPlaneta.ts";
import getPlaneta from "./resolvers/getPlaneta.ts";
import deletePlaneta from "./resolvers/deletePlaneta.ts";

const env = await load();
const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL");
console.log(URL_MONGO);
if (!URL_MONGO) {
    console.error("Debes definir la variable MONGO_URL");
    Deno.exit(1);
}
try {
    await mongoose.connect(URL_MONGO);
    console.log("Conexión exitosa a MongoDB");
} catch (error) {
    console.error("Error al conectar a MongoDB:", error);
}



const app = express();
app.use(express.json());
app //Persona
    .post("/addPersona", addPersona)
    .get("/getPersona/:id", getPersona)
    .delete("/deletePersona/:id", deletePersona)
    //Planeta
    .post("/addPlaneta", postPlaneta)
    .get("/getPlaneta/:id", getPlaneta)
    .delete("deletePlaneta/:id", deletePlaneta)


app.listen(8000, ()=>{
    console.info("API LISTA")
});