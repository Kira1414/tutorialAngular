import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'San Francisco';
  isLoggedIn = true;
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
  isEditable = true;
  message = "There's a secret message for you, hover to reveal 👀";
  count = 0;
  numbers = Array.from({ length: 200 }, (_, i) => i + 1);

  onMouseOver(){
    this.message = 'Way to go 🚀'
  }

  incrementCount(count: number)
  {
    this.count = count;
  }
}
