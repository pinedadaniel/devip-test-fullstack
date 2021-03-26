import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/http/auth.service";
import {StorageService} from "../../services/util/storage.service";
import {environmentDev} from "../../../environments/environment.dev";
import {Router} from "@angular/router";
import {RouterConstants} from "../../core/constants/router.constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tmdb-auth',
  templateUrl: './tmdb-auth.component.html',
  styleUrls: ['./tmdb-auth.component.scss']
})
export class TmdbAuthComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public env = environmentDev.back;
  public modal = false;
  public requestToken = this.storageService.getRequestTokenAuth() || '';
  public formLogin: FormGroup;

  ngOnInit(): void {
    this.getTokenAuth();
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  handleSubmit() {
    if (this.formLogin.valid) {
      const {password, username} = this.formLogin.value;
      const req = {
        password,
        username,
        request_token: this.storageService.getRequestTokenAuth()
      }
      this.authService.loginTMDB(req).subscribe((response: any) => {
        if (response.data && response.success) {
          const guestSessionId = response.data.session_id;
          this.storageService.setGuestSessionId(guestSessionId);
          this.storageService.setUsername(username);
          this.router.navigate(['explorer', 'all']);
        }
      });
    } else {
      return false;
    }
  }

  getTokenAuth() {
    if (!this.requestToken) {
      this.router.navigate([RouterConstants.LOGIN]);
    } else {
      return false;
    }
  }

  closeModal() {
    this.modal = false;
  }
}
