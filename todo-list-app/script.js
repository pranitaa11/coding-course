const todoEl = document.getElementById('todo');
const dueDateEl = document.getElementById('dueDate');
const addTodoEl = document.getElementById('addTodo');
const todoListEl = document.getElementById('todoList');

// json - JavaScript Object Notation

let todosObj = {
	// a: {
	// 	name: 'Todo 1',
	// 	dueDate: '2023-10-01',
	// 	completed: false,
	// },
	// b: {
	// 	name: 'Todo 2',
	// 	dueDate: '2023-10-02',
	// 	completed: true,
	// },
	// c: {
	// 	name: 'Todo 3',
	// 	dueDate: '2023-10-03',
	// 	completed: true,
	// },
	// d: {
	// 	name: 'Todo 4',
	// 	dueDate: '2023-10-04',
	// 	completed: false,
	// },
};

todosObj = JSON.parse(localStorage.getItem('todosInLocalStorage')) || {};

function renderTodos() {
	let itemsHTML = '';

	Object.entries(todosObj).forEach(([key, value]) => {
		console.log(`${key} ${value.name}`);
		itemsHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <label class="form-check-label" for="item_${key}">
            <input class="form-check-input me-1" type="checkbox" id="item_${key}" ${
			value.completed ? 'checked' : ''
		}> ${value.name}
            <span class="text-body-secondary fw-normal" style="font-size: 12px;">${
							value.dueDate
						}</span>
        </label>
        <span class="badge text-bg-danger rounded-pill ms-auto d-inline-block delete-btn" id="${key}" style="cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
            </svg>
        </span>
    </li>
  `;
	});

	todoListEl.innerHTML = itemsHTML;

	// get all delete buttons after rendering the todos using class name 'delete-btn'
	let deleteEls = document.querySelectorAll('.delete-btn');

	deleteEls.forEach(deleteEl => {
		deleteEl.addEventListener('click', e => {
			let key = e.target.id;
			console.log('key: ', key);
			delete todosObj[key];
			localStorage.setItem('todosInLocalStorage', JSON.stringify(todosObj));
			renderTodos();
			// console.log('🚀 ~ deleteEl>>>>', key);
		});
	});
}

renderTodos();

addTodoEl.addEventListener('click', e => {
	// stop default loading of the page
	e.preventDefault();

	let todo = todoEl.value;
	let dueDate = dueDateEl.value;

	let currentDate = new Date();
	let uniqueTime =
		currentDate.getHours() + '_' + currentDate.getMinutes() + '_' + currentDate.getSeconds();

	todosObj[uniqueTime] = {
		name: todo,
		dueDate: dueDate,
		completed: false,
	};

	localStorage.setItem('todosInLocalStorage', JSON.stringify(todosObj));

	todoEl.value = '';
	dueDateEl.value = '';

	renderTodos();
	console.log(todo, dueDate);
});

// let time = 8;

// if (time < 12) {
// 	console.log('Good Morning');
// } else {
// 	console.log('Good Afternoon');
// }

// ternary operator (condition ? trueValue : falseValue)
// console.log(time < 12 ? 'Good Morning' : 'Good Afternoon');

// let todoArr = [
// 	{
// 		name: 'Todo 1',
// 		dueDate: '2023-10-01',
// 		completed: false,
// 	},
// 	{
// 		name: 'Todo 2',
// 		dueDate: '2023-10-02',
// 		completed: false,
// 	},
// ];

// JavaScript - Script Language, PHP
// Java - Compiled Language, C, C++, Go

// variable
// let a = 10;
// let b = 'abc';
// let arr1 = ['dog', 'cat', 'fish'];
// let arr2 = ['apple', 400, true, null, undefined, { name: 'Rakesh' }, [1, 2, 3]];

// console.log(a);
// console.log(b);
// console.log(arr1[1]);
// console.log(arr2[6][1]);
// console.log(arr2[5].name);
