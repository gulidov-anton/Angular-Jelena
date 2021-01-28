import { DataService } from '../../services/data.service';
import { Client } from '../../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  clients: Client[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private DataService: DataService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.dataService.getClients(params.userId).subscribe(
        (data) => {
        this.clients = data.clients;
        }
        )
    )
  }