import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterConstants} from '../../core/constants/router.constants';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  public timeAnimate = false;
  public timeAnimateLogo = false;
  public sppiner = false;
  public endAnimate = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialAnimation();
  }

  initialAnimation() {
    const controllerOne = setTimeout(() => {
        this.timeAnimate = true;
        this.timeAnimateLogo = true;
        clearTimeout(controllerOne);
        return;
      }
    , 1500);
    const controllerTwo = setTimeout(() => {
        this.sppiner = true;
        this.closeSplash();
        clearTimeout(controllerTwo);
        return;
      }
      , 2000);
  }
  closeSplash() {
        document.getElementById('splash_main').style.marginTop = '-30px';
        const close = setTimeout(() => {
          this.sppiner = false;
          this.endAnimate = true;
          this.goToHome(close);
          return;
        }, 3000);
  }
  goToHome(arg) {
    const controller = setTimeout(() => {
      clearTimeout(arg);
      this.router.navigate([RouterConstants.HOME]);
      clearTimeout(controller);
    }, 1000);
  }
}
