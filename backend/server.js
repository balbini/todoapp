const express = require ('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const todos = [
  {
    "id": 0,
    "name": "Do All of the stuff"
  },
  {
    "id": 1,
    "name": "You didn't do it yet"
  }
]

function getTodo(id){
  return todos[id];
};

function addTodo(name){
  let newTodo = {
    "id": todos.length,
    "name": name
  }
  todos.push(newTodo);
  return newTodo;
}

app.get('/', function (req, res){
  return res.json(todos);
})

app.get('/:id', function (req, res) {
  let id = parseInt(req.params.id);
  if (id < todos.length && id >= 0){
    return res.json(getTodo(id));
  } else {
    res.sendStatus(404);
  }
})

app.post('/', function (req, res) {
  let name = req.body.name;
  if (name) {
    res.json(addTodo(name));
  }
})

app.listen(3000, () => console.log("listening on 3000"));
