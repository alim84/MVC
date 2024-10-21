const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

const htmlForm = `
<form method="POST" action="/users" >
<input type="text" name ="name"/>
<input type="number" name ="age"/>
<button type="submit" >Save User</button>

</form>
`;

app.get("/users", (req, res) => {
  res.send(htmlForm);
});
app.post("/users", (req, res) => {});

app.use((req, res, next) => {
  res.status(404).json({
    message: "resourse not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
