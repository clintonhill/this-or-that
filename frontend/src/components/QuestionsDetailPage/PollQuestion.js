import { useDispatch, useSelector } from "react-redux";
import { addVote } from '../../store/votes'

export default function PollQuestion( { answer } ) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const voteSubmit = () => {
    if(!user) {
      dispatch(addVote(answer.id))
    } else {
      dispatch(addVote(answer.id, user.id))
    }
  }

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
      <button className='vote-button' onClick={voteSubmit}>Vote</button>
    </div>
  );
}
