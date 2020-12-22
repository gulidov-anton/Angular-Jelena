import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter

  ngOnInit(): void {
  }

  remove() {
    this.onRemove.emit(this.post.id)
  }
}
