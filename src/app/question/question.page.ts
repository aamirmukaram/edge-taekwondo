import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  public selectedLevel;
  public selectedQuestionCategory;
  public isLowerBeltsIncluded;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedLevel = this.route.snapshot.paramMap.get('selectedLevel');
    this.selectedQuestionCategory = this.route.snapshot.paramMap.get('selectedQuestionCategory');
    this.isLowerBeltsIncluded = this.route.snapshot.queryParamMap.get('isLowerBeltsIncluded');
  }

}
