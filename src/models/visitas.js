import mongoose from "mongoose";
import { Schema } from "mongoose";

const visitasSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String, required: true, unique: true},
    motivo: { type: String, required: true },
    fechaInicio: { type: Date, required: true},
    fechaTermino: { type: Date, required: true},
});

const Visitas = mongoose.model("Visitas", visitasSchema);

export default Visitas;