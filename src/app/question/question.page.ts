import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questionsList } from '../data/questions';

console.log('sasdsa', questionsList);

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  public selectedLevel;
  public selectedQuestionCategory;
  public isLowerBeltsIncluded;
  public questions = [];
  public currentQuestionNumber = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedLevel = +this.route.snapshot.paramMap.get('selectedLevel');
    this.selectedQuestionCategory = +this.route.snapshot.paramMap.get('selectedQuestionCategory');
    this.isLowerBeltsIncluded = this.route.snapshot.queryParamMap.get('isLowerBeltsIncluded') === 'true';

    const filteredLevels = [...questionsList.filter(question => {
      if (this.selectedLevel === question.levelId) {
        return true;
      }

      if (this.isLowerBeltsIncluded && this.selectedLevel < question.levelId) {
        return true;
      }
      return false;
    })];


    const allFilteredLevelQuestion = filteredLevels.reduce((allFilteredQuestion, currentQuestion) => {
      return [...allFilteredQuestion, ...currentQuestion.questions];
    }, []).filter((question) => question.questionCategoryId === this.selectedQuestionCategory);

    this.questions = allFilteredLevelQuestion;
  }

  public onSuccessAnswer() {

  }

  public onFailAnswer() {

  }

}
