
let products = [
       {"id":1, "name":"HP", "price":12000},
       {"id":2, "name":"DELL", "price":14000},
       {"id":3, "name":"MAC", "price":20000}
];

function getAllProducts(req, res) {
       if (req.query.search) {
           // Si une query "search" est présente dans l'URL, filtrer les produits par correspondance partielle du nom, du prix ou de l'ID.
           const searchQuery = req.query.search.toLowerCase();
           const filteredProducts = products.filter(product => 
               product.name.toLowerCase().includes(searchQuery) || 
               product.price.toString().includes(searchQuery) || 
               product.id.toString().includes(searchQuery));
           res.json(filteredProducts);
       } else {
           // Sinon, renvoyer tous les produits.
           res.json(products);
       }
   }
   

function getProductById(req,res){
       const idP=req.params.id;
       const p=products.find(elem=>elem.id==idP);
       res.json(p);
}

function addProduct(req,res){
       res.send("bonjour nouhaila : add product");
       const p={"id":products[products.length-1].id + 1,"name":req.body.name, "price":req.body.price};
       products.push(p)
       res.json(products);
}

function deleteProductById(req,res){
       const idP=req.params.id;
       /*const prodTmp=products.filter(elem=>elem.id!=idP);
       products = prodTmp;   
       */
      //splice
      const index=products.findIndex(elem=>elem.id==idP);
      products.splice(index,1);
      res.json(products);
}

function updateProduct(req,res){
       const idP=req.params.id;
       const index=products.findIndex(elem=>elem.id==idP);
       //Modifier tous les attributs avec put
       /*
       products[index].name = req.body.name;
       products[index].price = req.body.price;   
       */
       Object.assign(products[index],req.body); //modifier les attributs necessaire avec patch
       res.json(products);
}

module.exports={getAllProducts, getProductById, addProduct, deleteProductById, updateProduct}
