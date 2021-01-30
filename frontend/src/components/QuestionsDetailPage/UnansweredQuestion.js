import PollQuestion from './PollQuestion'

export default function UnansweredQuestion({ answers }) {
  return (
    <div className='answer-box'>
      <div className='main-header'>
        Answers:
      </div>
      {answers && answers.map(answer => (
        <PollQuestion key={answer.id} answer={answer} />
      ))}
    </div>
  )
}
