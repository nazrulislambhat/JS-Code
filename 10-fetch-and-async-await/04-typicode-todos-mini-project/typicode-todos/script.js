const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
/*
The reason why the getTodos function is returning a Promise is because the fetch function itself returns a Promise. The fetch function is an asynchronous operation that sends a network request to the specified URL and returns a Promise that resolves to the Response object representing the response to that request.

In the code you provided, the fetch function is used to send a GET request to the apiUrl + '?_limit=5' URL. The Promise returned by fetch is then chained with the .then() method to handle the response asynchronously. In the first .then() callback, the res object represents the response, and the .json() method is called on it to parse the response body as JSON. The .json() method also returns a Promise that resolves to the parsed JSON data.

Finally, in the second .then() callback, the data parameter represents the parsed JSON data obtained from the response. In your code, it logs the data to the console. If you want to work with the data outside of the getTodos function, you can return the Promise chain using the return keyword, allowing the caller of getTodos to handle the resolved Promise and access the data.
*/
const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};

function addTodoToDom(todo) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id); //custom attribute
  if (todo.completed) {
    div.classList.add('done');
  }
  document.getElementById('todo-list').appendChild(div);
}
const createToDo = (e) => {
  e.preventDefault();
  console.log(e.target.firstElementChild.value);
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createToDo);
};
getTodos();
