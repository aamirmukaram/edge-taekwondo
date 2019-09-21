import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-secondary-splash-screen',
  templateUrl: './secondary-splash-screen.page.html',
  styleUrls: ['./secondary-splash-screen.page.scss'],
})
export class SecondarySplashScreenPage implements OnInit {
  // private backButton$: Subscription = null;

  constructor() {
  }

  ngOnInit() {
  }

  // ionViewWillLeave() {
  //   this.backButton$.unsubscribe();
  // }
  //
  // ionViewDidEnter() {
  //   this.bindBackButton();
  // }
  //
  // private bindBackButton() {
  //   this.backButton$ = fromEvent(document, 'backbutton')
  //     .subscribe((e) => {
  //       console.log(e);
  //       // alert(e);
  //     });
  // }

}
