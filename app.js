const express=require("express");
const app=express();

const productrouter=require("./routes/products.routes");

app.use(express.urlencoded());
app.use("/products",productrouter);

app.listen(5000,()=>console.log("server running")); //demarer le serveur
