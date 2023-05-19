"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "express";
// import userRoute from "./infrastructure/route/user.route";
// import dbInit from "./infrastructure/db/mongo";
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
const port = 3001;
// app.get("/", (_, res) => {
//     res.send("Hola mundo");
// })
// app.use(userRoute);
// dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));
