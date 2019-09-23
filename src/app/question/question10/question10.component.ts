import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.scss'],
})
export class Question10Component implements OnInit {
  @Input() question;
  @Output() success = new EventEmitter();
  @Output() fail = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
