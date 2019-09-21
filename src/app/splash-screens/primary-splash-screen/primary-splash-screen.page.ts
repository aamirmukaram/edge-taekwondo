import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-splash-screen',
  templateUrl: './primary-splash-screen.page.html',
  styleUrls: ['./primary-splash-screen.page.scss'],
})
export class PrimarySplashScreenPage implements OnInit {
  readonly TIMEOUT: number = 3000;
  private redirectTimeout = null;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    clearTimeout(this.redirectTimeout);
  }

  ionViewDidEnter() {
    this.redirectTimeout = setTimeout(() => {
      this.redirectToSecondaryPage();
    }, this.TIMEOUT);
  }

  private redirectToSecondaryPage() {
    clearTimeout(this.redirectTimeout);
    this.router.navigate(['/splash-screens/secondary-splash-screen']);
  }

}
