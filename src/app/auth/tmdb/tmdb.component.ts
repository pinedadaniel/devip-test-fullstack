import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/http/auth.service';
import {StorageService} from '../../services/util/storage.service';
import {environmentDev} from '../../../environments/environment.dev';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.scss']
})
export class TmdbComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  public env = environmentDev.back;
  public modal = false;
  public requestToken = this.storageService.getRequestTokenAuth() || '';
  public timeOutToken = 86400000;

  ngOnInit(): void {
    this.getTokenAuth();
  }

  getTokenAuth() {
    if (this.requestToken) {
      setTimeout( () => {
        this.modal = true;
      }, 1000);
    } else {
      this.authService.getTokenAuth().subscribe((response: any) => {
        if (response.data && response.success) {
          this.requestToken = response.data.request_token;
          this.storageService.setRequestTokenAuth(this.requestToken);
          setTimeout(() => {
            this.modal = true;
            this.timeOut();
          }, 1000);
        }
      });
    }
  }

  closeModal() {
    this.modal = false;
  }

  timeOut() {
    setTimeout(() => {
      this.storageService.deleteRequestTokenAuth();
    }, this.timeOutToken);
  }

}
