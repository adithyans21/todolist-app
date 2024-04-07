const z = require('zod');

const createtodo = z.object({
    title: z.string(),
    description: z.string()
});

const updatetodo = z.object({
    _id: z.string() 
});

module.exports = {
    createtodo: createtodo,
    updatetodo: updatetodo
};
