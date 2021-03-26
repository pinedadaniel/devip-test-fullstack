import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/http/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StorageService} from "../../services/util/storage.service";
import {RouterConstants} from "../../core/constants/router.constants";

@Component({
  selector: 'app-guest-auth',
  templateUrl: './guest-auth.component.html',
  styleUrls: ['./guest-auth.component.scss']
})
export class GuestAuthComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
  ) { }

  public formLogin: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
  }

  handleSubmit() {
    if (this.formLogin.valid) {
      this.authService.loginGuest().subscribe((response: any) => {
        if (response.data && response.success) {
          const username = this.formLogin.value.username;
          const guest_session_id = response.data.guest_session_id;
          this.storageService.setGuestSessionId(guest_session_id);
          this.storageService.setUsername(username);
          this.router.navigate(['explorer', 'all']);
        }
      });
    } else {
      return false;
    }
  }
}
