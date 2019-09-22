import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-question-category',
  templateUrl: './select-question-category.page.html',
  styleUrls: ['./select-question-category.page.scss'],
})
export class SelectQuestionCategoryPage implements OnInit {
  public selectedLevel;
  public isLowerBeltsIncluded;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedLevel = this.route.snapshot.paramMap.get('selectedLevel');
    this.isLowerBeltsIncluded = this.route.snapshot.queryParamMap.get('isLowerBeltsIncluded');
  }

}
