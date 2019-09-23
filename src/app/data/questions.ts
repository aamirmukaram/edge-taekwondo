/*
levelId:
10  = White Belt
20  = Yellow Stripe
30  = Yellow Belt
40  = Green Stripe
50  = Green Belt
60  = Blue Stripe
70  = Blue Belt
80  = Red Stripe
90  = Red Belt
100 = Black Stripe
110 = I DEGREE
120 = II DEGREE
130 = III DEGREE
140 = IV DEGREE
150 = V DEGREE
160 = VI DEGREE
 */

/*
questionCategoryId:
10  = Vocabulary
20  = Patterns
30  = Qualities of a Good Instructor
*/

/*
questionTypeId:
10  = MCQs
*/


export const questionsList = [
  {
    levelId: 10,
    questions: [
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 1',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        }
      },
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 2',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        }
      }
    ]
  },
  {
    levelId: 20,
    questions: [
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 3',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        },
      },
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 4',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        }
      }
    ]
  },
  {
    levelId: 30,
    questions: [
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 5',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        }
      },
      {
        questionCategoryId: 10,
        questionTypeId: 10,
        question: {
          text: 'This is a MCQs Question. Question id 6',
          options: ['A', 'B', 'C', 'D'],
          answer: 'A'
        }
      }
    ]
  },
];
