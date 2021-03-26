import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/util/storage.service";
import {RouterConstants} from "../../core/constants/router.constants";

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {
  constructor(private router: Router,
              private storageService: StorageService,
  ) { }
  ngOnInit(): void {
    const initialUser = {
      target: {
        value: 'TMDB'
      }
    };
    this.handleChange(initialUser);
  }

  handleChange($event) {
    const user = $event.target.value;
    this.storageService.setTypeUser(user);
    switch (user) {
      case 'GUEST':
        this.router.navigate([RouterConstants.AUTH, RouterConstants.GUEST]);
        break;
      case 'TMDB':
        this.router.navigate([RouterConstants.AUTH]);
        break;
    }
  }
}
