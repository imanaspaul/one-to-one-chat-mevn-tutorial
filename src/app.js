const app = require("express")()

// routes
app.get('/', (_, res)=> {
    res.json({
        message: "It's working.."
    })
})


// app listen
app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Server is running on localhost:5000`);
})