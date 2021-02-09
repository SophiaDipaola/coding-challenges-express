const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');


const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index'); // Yo, Rome: what is this doing?
});


app.post('/posts/new',(req,res)=>{
   let firstName = req.body.firstName
   let iceCream = req.body.iceCream
   res.render('posts/new',{name:firstName, iceCream: iceCream})

})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
