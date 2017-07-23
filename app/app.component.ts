import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  message: string = 'Hello';
  users: User[] = [
    { id: 25, name: 'Julius', username: 'jsur' },
    { id: 26, name: 'SeppoHovi', username: 'hovi' },
    { id: 27, name: 'Jari', username: 'kurri' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}
