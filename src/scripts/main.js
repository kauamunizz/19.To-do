import '../styles/styles.scss';


const state = {
    list: [{
        task: '',
        checked: ''
    }]
}


function createTask() {
    const teste =  document.querySelector('.tarefa').value;
    const task = teste;
    // const checkedInput = checkInput();
    
    const taskObj = {
        task: task,
        checked: false
    }

    state.list.push(taskObj);
    console.log(state.list)
    
    checkInput()
    
    return /*html*/`
        <div class="task">
            <input type="checkbox" name='checkbox' class='check'>
            <h2>${teste}</h2>
        </div>
    `;
};


document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.add')
        .insertAdjacentHTML('beforeend', createTask());
});

function checkInput() {
    document.querySelector('.add').addEventListener('click', (event) => {
        const element = event.target;

        if (element.classList.contains('check')) {
            const checkedInput = document.querySelector('.check').checked;
            if  (checkedInput === true){
                console.log(true)
            }
        } 
        else {
            console.log(false)
        }
    })
}