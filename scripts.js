let todo = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: false
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: true
    }
]

const todosApp = {
    data() {
        return {
            todos: todo,
            newTodo: {}
        }
    },
    methods: {
        addTodo: function (){
            if (this.newTodo.text){
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false
                }
            } 
            else{
                alert('Adicione uma tarefa')
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app')