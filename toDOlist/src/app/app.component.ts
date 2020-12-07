import { Component } from '@angular/core';

interface Item {
  purchase: string;
  done: boolean;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDOList';
  text: string = "";
  price: number = 0;
  items: Item[] = [
    {purchase: "Meat", price: 60, done: false}, 
    {purchase: "Milk", price: 17, done: false}, 
    {purchase: "Bread", price: 7, done: false}, 
    {purchase: "Beer", price: 5, done: true}, 
  ];
  AddItem(text: string, price: number) {
    this.items.push({
      purchase: text,
      price: price,
      done: false,
    });
  }
}
