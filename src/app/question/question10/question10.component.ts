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
  public questionItem: any = {};
  public selectedAnswer;

  constructor() {
  }

  ngOnInit() {
    this.questionItem = this.question.question;
  }


  public submitAnswer() {
    String(this.selectedAnswer).toLowerCase() === String(this.questionItem.answer).toLowerCase() ? this.success.emit() : this.fail.emit();
  }
}
