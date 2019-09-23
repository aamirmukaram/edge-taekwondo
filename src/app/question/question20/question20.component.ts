import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question20',
  templateUrl: './question20.component.html',
  styleUrls: ['./question20.component.scss'],
})
export class Question20Component implements OnInit {
  @Input() question;
  @Output() success = new EventEmitter();
  @Output() fail = new EventEmitter();
  public questionItem: any = {};
  public typedAnswer;

  constructor() {
  }

  ngOnInit() {
    this.questionItem = this.question.question;
  }


  public submitAnswer() {
    String(this.typedAnswer).toLowerCase() === String(this.questionItem.answer).toLowerCase() ? this.success.emit() : this.fail.emit();
  }
}
