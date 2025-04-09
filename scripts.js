

const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {}
        }
    },
    methods: {
        addTodo: function (){
            if (this.newTodo.text){
                this.todos.push( this.newTodo)
                this.newTodo = {
                    done: false
                }
                localStorage.setItem('todos', JSON.stringify(this.todos)) 
            }
            
            else{
                alert('Adicione uma tarefa')
            }
        },
        clearAll: function (){
            this.todos = []
        },
        upStorage: function() {
            localStorage.setItem('todos', JSON.stringify(this.todos)) 
        }
    },
    created() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos 
    }
};

Vue.createApp(todosApp).mount('#app')