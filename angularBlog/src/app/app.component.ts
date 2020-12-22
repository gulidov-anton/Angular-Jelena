import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: any;
  toggle1: any;
  toggle2: any;
  now: Date = new Date();
  title = 'angularBlog';
  posts: Post[] = [
    {id:1, title: "Learn Angular", text: "Angular - это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний. Angular — это полностью переписанный фреймворк от той же команды, которая написала AngularJS."},
    {id:2, title: "Learn React", text: "React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций."}
  ];
  updatePosts(post: Post) {
    console.log("--->", post);
    this.posts.unshift(post);
  }
  removePost(id: number) {
    this.posts = this.posts.filter(
      p => p.id != id
    );
  }
}
