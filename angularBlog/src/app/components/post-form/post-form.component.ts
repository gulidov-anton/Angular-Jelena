import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title = "";
  text = "";

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput') inputRef: ElementRef;
  addPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
