export default function PollQuestion( { answer } ) {
  return (
    <div className='poll-box'>
      <div>
        <div className='answer-header'>
          {answer.header}
        </div>
        <div className='question-detail'>
          {answer.body}
        </div>
      </div>
      <button className='vote-button'>Vote</button>
    </div>
  );
}
