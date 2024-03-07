// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachView} = props
  const {courseTitle, description, duration, tagsList} = eachView
  return (
    <div className="course-time-line-card-container">
      <div className="course-duration-container">
        <h1 className="course-title-style">{courseTitle}</h1>
        <div className="clock-duration-container">
          <AiFillClockCircle className="clock-style" />
          <p className="duration-style">{duration} days</p>
        </div>
      </div>
      <p className="description-style">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <li className="list-style" key={eachTag.id}>
            <p className="name-style">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
