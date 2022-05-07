const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (request, response) => {
    response.json({message: "VisualPartners Api welcome!"});
});

app.listen(port, () => {
    console.log(`VisualPartners API in localhost:${port}`);
});