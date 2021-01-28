import { Client } from '../../types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  @Input() clients: Client[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
