import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterConstants} from '../../core/constants/router.constants';
import {StorageService} from '../../services/util/storage.service';


@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent implements OnInit {
  constructor(private router: Router,
              private storageService: StorageService,
              ) { }
  ngOnInit(): void {
    const initialUser = {
      target: {
        value: 'GUEST'
      }
    };
    this.handleChange(initialUser);
  }

  handleChange($event) {
    const user = $event.target.value;
    this.storageService.setTypeUser(user);
    switch (user) {
      case 'GUEST':
        this.router.navigate([RouterConstants.LOGIN]);
        break;
      case 'TMDB':
        this.router.navigate([RouterConstants.LOGIN, RouterConstants.AUTH ]);
        break;
    }
  }

}
