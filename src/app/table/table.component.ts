import { Component, OnInit } from '@angular/core';
import { User } from '../userInterface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table', 
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit{
  constructor(private userService: UserService){}

  users:User[] = [];

  getUsers(){
    return this.userService.getUsers().subscribe(
      data => this.users = data
    )
  }

  ngOnInit(){
    this.getUsers()
  }
}
