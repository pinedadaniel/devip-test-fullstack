import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {RouterConstants} from '../../core/constants/router.constants';
import {StorageService} from '../../services/util/storage.service';
import {AuthService} from '../../services/http/auth.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
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
