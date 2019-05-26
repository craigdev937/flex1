import express from "express";
import hbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import froute from "./routes/froute";

const main = async () => {
    const app = await express();

    app.set("view engine", ".hbs");
    app.set("views", path.join(__dirname, "../src/views"));
    app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));

    app.use(express.static(path.join(__dirname, "../src/public")));
    app.use((bodyParser.urlencoded({ extended: false })));
    await app.use(bodyParser.json());
    await app.use("/", froute);

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to quit.`);
    })
};

main();

