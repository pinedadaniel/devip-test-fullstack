import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouterConstants} from "../../core/constants/router.constants";
import { ActivatedRoute, Params } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from "../../services/util/storage.service";

@Component({
  selector: 'app-private-main',
  templateUrl: './private-main.component.html',
  styleUrls: ['./private-main.component.scss']
})
export class PrivateMainComponent implements OnInit {

  constructor( private router: Router,
               private rutaActiva: ActivatedRoute,
               private formBuilder: FormBuilder,
               private storageService: StorageService

  ) { }

  public auth = this.storageService.getGuestSessionId();
  public login = false;

  ngOnInit(): void {
    this.getAuth();
  }

  getAuth() {
    if (this.auth) {
      this.login = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([RouterConstants.LOGIN]);
  }

}
