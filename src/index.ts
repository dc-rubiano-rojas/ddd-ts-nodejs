import express from "express";
// import cors from "express";
import AuthorRoute from "./author/infrastructure/route/author.route";
// import dbInit from "./infrastructure/db/mongo";

const app = express();
// app.use(cors());
app.use(express.json());

const port = 3001;

app.get("/", (_, res) => {
    res.send("Hola mundo!!");
})

app.use(AuthorRoute);
// dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));