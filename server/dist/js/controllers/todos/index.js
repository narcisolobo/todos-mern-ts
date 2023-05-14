import Todo from '../../models/todo.js';
async function getAllTodos(_, res) {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
async function createTodo(req, res) {
    try {
        const body = req.body;
        const todo = await Todo.create(body);
        res.status(201).json(todo);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
async function getOneTodo(req, res) {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
async function updateOneTodo(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const todo = await Todo.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
async function deleteOneTodo(req, res) {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
export { createTodo, getAllTodos, getOneTodo, updateOneTodo, deleteOneTodo };
