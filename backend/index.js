const express = require('express');
const cors  = require('cors');
const { createtodo, updatetodo } = require('./types');
const {todo} = require('./db');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/todo',async function(req,res){
const createPayLoad = req.body;
const parsedPayload = createtodo.safeParse(createPayLoad);
if(!parsedPayload.success){
    res.status(411).json({
        msg:"The Input data is invalid"
    })
    return ;
}
await todo.create({
    title:createPayLoad.title,
    description: createPayLoad.description,
    completed: false
})
 res.json({
    msg:"The Todo is created"
 })

})

app.get('/todos',async function(req,res){
const todos = await todo.find({});
res.json({
    todos
})
})

app.put('/completed', async function(req, res) {
    const updatePayLoad = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayLoad);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "The input is invalid"
        });
        return;
    }

    await todo.updateOne({
        _id: updatePayLoad._id
    }, {
        completed: true
    });
    res.json({
        msg: "Todo is marked as completed"
    });
});

app.listen(3000);