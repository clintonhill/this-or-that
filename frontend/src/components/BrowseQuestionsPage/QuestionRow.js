import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

export default function QuestionRow({question}) {
  const history = useHistory();
  const sendToQuestionPage = () => {
    history.push(`/questions/${question.id}`)
  }
  return (
    <div className='question-row__main' onClick={sendToQuestionPage}>
      {question && question.title} <span className='isAnswered'> <FontAwesomeIcon icon={faPenFancy} size='lg'/></span>
    </div>
  )
}
