import React from 'react';
import QuestionsPage from '../QuestionsPage'


import './IndexPage.css';

const questionMock = {
  question: {
    title: 'Who is the best superhero?',
    body: 'Of all the superheroes of the world, be it Darkhorse, DC, Marvel, or something else, which of them is the ultimate superhero?'
  },
  answer: {
    chose: 'Rorschach'
  },
  chartData: {
    labels: ['Rorschach', 'Spiderman', 'Wonder Woman', 'Ant-Man', 'Dr Strange', 'Thor', 'Batman'],
    votes: [10, 5, 6, 2, 3, 8, 8 ],
    backgroundColor: [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(155, 49, 146)",
  ]
  }
}

function IndexPage() {

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to this /or/ that
      </div>
      <h6>Do you have a polarizing question? Need to get some opinions on the burning queries on the top of your head?</h6>
      <p>We have you covered.</p>
      <QuestionsPage questionDetails={questionMock}/>
    </div>
  )
}

export default IndexPage;
