import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username',
  imports: [FormsModule],
  templateUrl: './username.html',
  styleUrl: './username.css',
})
export class Username {
    username = 'meerab23';

}
