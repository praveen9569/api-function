const express = require('express');

const app  = express();

const PORT = 3000;
// in memory database se data fetch krke dena hai
const books = [
    {id:1, title:"book1", author:"author1"},
    {id:2, title:"book2", author:"author2"},    
];


//routes
app.get('/books',(req,res)=>
{
    res.json(books);
}); 

app.get('/books/:id',(req,res)=>
{
    const bookId = parseInt(req.params.id); 
    const book = books.find(b => b.id === bookId);
    if(book)
    {
        res.json(book);


    }    else
    {
        res.status(404).send("book not found");
    }   
});








app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})