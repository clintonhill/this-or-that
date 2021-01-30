import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addVote } from '../../store/votes'

export default function PollQuestion( { answer } ) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const voteSubmit = () => {
    console.log('answerId', answer.id);
    dispatch(addVote(answer.id, user.id));
    history.push(`/questions/${answer.topicId}`)
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
