var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
/* GET home page. */
const products=[
  {
    id: 1,
    name:"IPHONE 11",
    category:'Mobile',
    description:"High performance",
    image:""
  },
  {
    id: 2,
    name:"POCO M3 ",
    category:'Mobile',
    description:"Good display",
    image:""
  },
  {
    id: 3,
    name:"IPHONE 14",
    category:'Mobile',
    description:"High performance",
    image:""
  },
  {
    id: 4,
    name:"ONE PLUS ",
    category:'Mobile',
    description:"Good battery",
    image:""
  },
  {
    id: 5,
    name:"Macbook pro",
    category:'Laptop',
    description:'Good performance',
    image:""
  },
  {
    id: 6,
    name:"Himalaya face wash",
    category:'Cream',
    description:'Removes Pimples',
    image:""
  },
  {
    id: 7,
    name:"Football",
    category:'Sports',
    description:'High durability',
    image:""
  },
  {
    id: 8,
    name:"Football Shoes",
    category:'sports',
    description:'High comfort',
    image:""
  },
  {
    id: 9,
    name:"Casual shoes",
    category:'shoes',
    description:'Long lasting',
    image:""
  }
 

];
const carts = [];
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'ShoppingCart',products,admin:false });
});
router.post('/Cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productToAdd = products.find(product => product.id === productId);

  if (productToAdd) {
    // Add the product to the cart
    carts.push(productToAdd);
  }

  res.redirect('/cart');
});

// Route to display the cart
router.get('/cart', (req, res) => {
  res.render('cart', { carts });
});


router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/login',(req,res)=>{
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27018',(err,client)=>{
    if(err){
      console.log("error")
    }else{
      console.log("database connected")
    }
      
      
  })
  
 
})



// Route to add products to the cart


module.exports = router;
