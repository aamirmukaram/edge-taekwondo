import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-splash-screen',
  templateUrl: './secondary-splash-screen.page.html',
  styleUrls: ['./secondary-splash-screen.page.scss'],
})
export class SecondarySplashScreenPage implements OnInit {
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
    this.router.navigate(['/select-level']);
  }

}
