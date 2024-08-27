import { Component, Input } from '@angular/core';
import { User } from '../../dummy-data/users';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})


export class UserComponent {
  @Input()
  user!: User;
}
