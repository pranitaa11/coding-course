const todoEl = document.getElementById('todo');
const dueDateEl = document.getElementById('dueDate');
const addTodoEl = document.getElementById('addTodo');
const todoListEl = document.getElementById('todoList');


let todosObj = {
	a: {
		name: 'Todo 1',
		dueDate: '2023-10-01',
		completed: false,
	},
	b: {
		name: 'Todo 2',
		dueDate: '2023-10-02',
		completed: true,
	},
	c: {
		name: 'Todo 3',
		dueDate: '2023-10-03',
		completed: false,
	},
	d: {
		name: 'Todo 4',
		dueDate: '2023-10-04',
		completed: true,
	},
};

let itemsHTML = '';

Object.entries(todosObj).forEach(([key, value]) => {
	console.log(`${key} ${value.name}`);
	itemsHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <label class="form-check-label stretched-link" for="item_${key}">
            <input class="form-check-input me-1" type="checkbox" id="item_${key}"> ${value.name}
            <span class="text-body-secondary fw-normal" style="font-size: 12px;">${value.dueDate}</span>
        </label>
        <span class="badge text-bg-danger rounded-pill ms-auto d-inline-block" id="${key}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
            </svg>
        </span>
    </li>
  `;
});

todoListEl.innerHTML = itemsHTML;
