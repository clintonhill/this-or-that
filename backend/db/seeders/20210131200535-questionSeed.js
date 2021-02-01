'use strict';

const fetch = require('node-fetch')
const { nanoid } = require('nanoid')
const faker = require('faker');
const { decode } = require('html-entities')

const getQuestionData = async() => {
  const response = await fetch('https://opentdb.com/api.php?amount=50&type=multiple');
  const json = await response.json();
  return json.results;
}

module.exports = {
  up: async (queryInterface) => {
      const questionData = await getQuestionData();
      //console.log(questionData)
      const questions = questionData.map(question => {
        return {
          title: decode(question.question),
          body: `${question.category} - ${question.difficulty}`,
          ownerId: 1,
          slug: nanoid(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      })
      // const answers = questionData.map(question => {

      // })
      // console.log(questions)
      let createdRows = await queryInterface.bulkInsert('Topics', questions, { returning: ['id']});
      const answersRows = [];
      createdRows.forEach((el, idx) => {
        const id = el.id;
        const answers = [decode(questionData[idx].correct_answer) + '(*)']
        questionData[idx].incorrect_answers.forEach(answer => {
          answers.push(decode(answer));
        })
        const row = answers.map((answer) => {
          return {
            topicId: id,
            header: answer,
            body: faker.lorem.paragraph(),
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        })
        answersRows.push(...row);
      })
      console.log(answersRows)
      return queryInterface.bulkInsert('Answers', answersRows, { });
  },

  down: async (queryInterface) => {
      await queryInterface.bulkDelete('Votes', {}, {})
      await queryInterface.bulkDelete('Answers', {}, {})
      await queryInterface.bulkDelete('Topics', {}, {});
  }
};
