export default function CharacterCounter({currentCount, maxCount}) {
  return <div className='character-counter'>{maxCount - currentCount}</div>
}
