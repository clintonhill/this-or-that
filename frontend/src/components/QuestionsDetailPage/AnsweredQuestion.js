import { Pie } from 'react-chartjs-2';

function QuestionsPage({ answers, questionId }) {

  if(!answers) return null;
  const labels = answers.map(answer=> answer.header)
  const votes = answers.map(answer => answer.Votes.length)
  const backgroundColor= [
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(54, 162, 235)",
    "rgb(153, 102, 255)",
    "rgb(155, 49, 146)",
  ]


  return (
    <div className='answer-box'>
      <div className='main-header'>
        Answer:
        </div>
      <div className='answer-header'>
        You chose {answers[0].header}
      </div>
      <div className='chart-container'>
        <Pie
          className='pie-chart'
          data={{
            labels,
            datasets: [{
              data: votes,
              backgroundColor
            }]
          }}
        />
      </div>
    </div>
  )
}

export default QuestionsPage;
