const mongoose = require('mongoose');
const Todo = require('../models/todo');

mongoose.Promise = global.Promise;

const db = mongoose.connect('localhost:27017/mean', {useNewUrlParser: true});


const list = () =>{
    Todo.find()
        .then(todo =>{
            console.log(todo);
            console.log(`${todo.length} activity`);
            db.close();
        })
}

const add = (todo) =>{
    Todo.create(todo).then(todo =>{
        console.log('added new activity');
        db.close();
    });
}

const update = (_id, todo) =>{
    Todo.update({_id}, todo)
        .then(todo =>{
            console.log('activity update');
            db.close();
        });
}

const remove = (_id) =>{
    Todo.remove({_id})
        .then(todo =>{
            console.log('activity deleted');
            db.close();
        })

}




module.exports ={
    list,
    add,
    update,
    remove
}