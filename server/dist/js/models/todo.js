import { model, Schema } from 'mongoose';
const todoSchema = new Schema({
    task: {
        type: Schema.Types.String,
        required: [true, 'Please enter task.'],
    },
    description: {
        type: Schema.Types.String,
        required: [true, 'Please enter description.'],
    },
    isComplete: {
        type: Schema.Types.Boolean,
        default: false,
    },
}, { timestamps: true });
const Todo = model('Todo', todoSchema);
export default Todo;
