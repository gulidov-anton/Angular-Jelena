import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators'
 
export interface Todo {
  userId?: number;
  id?: number;
  title?: string;
  completed: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  loading = false;
  todos: Todo[] = [];
  todoTitle = '';
  errorMessage='';
  ngOnInit() {
   this.fetchTodos();
  }

  addTodo() {
    if(!this.todoTitle.trim()) {
      return;
    }
  const newTodo: Todo = {
    title: this.todoTitle,
    completed: false,
  }
  this.http.post<any>('http://jsonplaceholder.typicode.com/todos', newTodo).subscribe(
    todos => {
      console.log('Response', todos);
      this.todos.push(todos);
      this.todoTitle = '';
    }
  )
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos')
    .pipe(delay(1500))
    .subscribe(
      todos => {
        console.log('Response', todos);
        this.todos = this.todos;
        this.loading = false;
      },
      errors => {
        console.log('error----->', error);
        this.errorMessage = error.message;
      }
    );
  }

  removeTodo(id: number) {
    this.http.delete<void>(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .subscribe(
     response => {
        console.log('Response', response);
        this.todos = this.todos.filter(t => t.id !== id)
      }
    );
  }

  completeTodo(id: number) {
    this.http.put<any>(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true,
    })
    .subscribe(
     todo => {
       this.todos.find( t => t.id === this.todoTitle.id).completed = true;
     }
        )
        )
      }
    );
  }

}
