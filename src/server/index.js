const app = require("./server");

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});