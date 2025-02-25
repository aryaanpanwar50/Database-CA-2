const Book = require('./model');

const addBook =async(req,res)=>{
    try{
        const{title,author,genre,publishedYear,availableCopies,borrowedBy} = req.body;
        if(!title||!author||!genre||!publishedYear||!availableCopies){
            return res.status(400).send("All fields are required to be filled")
        }
    
        const newBook = new Book({
            title,
            author,
            genre,
            publishedYear,
            availableCopies,
            borrowedBy
        })
    
        await newBook.save();
        res.status(200).json({message:"Book added successfully",newBook})
        
    }catch(error){
        res.status(500).json({error:error.message})
    }

}

const getAllBooks = async(req,res)=>{
    try{
        const data =await Book.find();
        res.status(200).send(data)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getBookById =async(req,res)=>{
    try{
        const data = await Book.findById(req.params.id)
        if(!data){
            return res.status(404).send("Book not found")
        }

        res.status(200).send(data)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateBookById =async(req,res)=>{
    try{
        const data = await Book.findByIdAndUpdate(req.params.id , req.body,{new:true});
       
        if(!data){
            return res.status(404).send("Book not found")
        }
        res.status(200).json({message:"Book updated successfully",data})
        
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteBookById =async(req,res)=>{
    try{
        const data = await Book.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).send("Book not found")
        }
        res.status(200).json({message:"Book deleted successfully"})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {getAllBooks,addBook,getBookById,updateBookById,deleteBookById}