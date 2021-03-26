import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public TYPE_USER = 'TYPE_USER';
  public GUEST_SESSION_ID = 'GUEST_SESSION_ID';
  public USERNAME = 'USERNAME';
  public REQUEST_TOKEN = 'REQUEST_TOKEN';


  constructor() { }

  setTypeUser(type) {
    localStorage.setItem(this.TYPE_USER, type);
    return true;
  }

  setGuestSessionId(id) {
    localStorage.setItem(this.GUEST_SESSION_ID, id);
    return true;
  }

  getGuestSessionId() {
    return localStorage.getItem(this.GUEST_SESSION_ID);
  }

  setUsername(user) {
    localStorage.setItem(this.USERNAME, user);
    return true;
  }

  setRequestTokenAuth(token) {
    localStorage.setItem(this.REQUEST_TOKEN, token);
    return true;
  }

  getRequestTokenAuth() {
    return localStorage.getItem(this.REQUEST_TOKEN);
  }

  deleteRequestTokenAuth() {
     localStorage.removeItem(this.REQUEST_TOKEN);
     return true;
  }
}
