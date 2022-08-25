import '../styles/styles.scss';
// import '../../node_modules/reset-css';

"strict mode"

const main = (() => {

    const state = {
        list: []
    }


    function createTask(text) {
        const newTask = {
            id: Date.now(),
            task: text,
            checked: false
        }

        state.list.push(newTask);
        renderTask();
    }

    function renderTask() {
        const { list } = state;
        const container = document.querySelector('.myTask');
        container.innerHTML = '';

        list.forEach(({id, task, checked}) => {
            document.querySelector('.myTask').insertAdjacentHTML('beforeend', `
            <li class="task" data-id=${id}>
                <label class=${checked ? 'checked' : ''}>
                    <input type="checkbox" name='checkbox' ${checked ? 'checked' : ''}>
                    <h2>${task}</h2>
                </label>
                <button>
                    <img class="remove" src="./src/assets/icons8-remove-48.svg" alt="remove">
                </button>
            </li>
            `)
        });
    }

    function updateTask(id, checked) {
        const task = state.list.find(f => f.id === id);

        task.checked = checked;
        renderTask()
    }

    function deleteTask(id) {
        state.list = state.list.filter(f => f.id !== Number(id))
        renderTask();
    }


    function events() {
        document.forms.form.addEventListener('submit', event => {
            event.preventDefault();

            const { text } = document.forms.form;
            createTask(text.value);
        } )
        
        document.querySelector('.myTask').addEventListener('click', event => {
            const click = event.target;

            if (click.classList.contains('remove')){
                const lista = click.closest('li');
                const id = Number(lista.dataset.id);

                deleteTask(id);
            }
            else if (click.tagName === 'INPUT'){
                const lista = click.closest('li');
                const id = Number(lista.dataset.id);

                updateTask(id, click.checked);
            }
        })
    }


    function init() {
        
        events();
    }


    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', main.init);