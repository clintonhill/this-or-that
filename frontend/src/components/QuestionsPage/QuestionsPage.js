import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Pie, Chart } from 'react-chartjs-2';

import './QuestionsPage.css';

function QuestionsPage({questionDetails}) {

  const {question, answer, chartData} = questionDetails;

  return (
    <>
    <div className='question-box'>
      <div className='main-header'>
        Question:
      </div>
      <div className='question-header'>
        {question.title}
      </div>
      <div className='question-detail'>
        {question.body}
      </div>
    </div>
    <div className='answer-box'>
      <div className='main-header'>
        Answer:
      </div>
      <div className='answer-header'>
        You chose {answer.chose}
      </div>
    </div>
    <div className='chart-container'>
      <Pie
        className='pie-chart'
        data={{
          labels: chartData.labels,
          datasets: [{
            data: chartData.votes,
            backgroundColor: chartData.backgroundColor
          }]
        }}
      />
    </div>
    </>
  )
}

export default QuestionsPage;
