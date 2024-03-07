// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachView} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachView
  return (
    <div className="project-time-line-card-container">
      <img className="project-image-style" src={imageUrl} alt="project" />
      <div className="project-time-container">
        <h1 className="project-heading-style">{projectTitle}</h1>
        <div className="calendar-hour-container">
          <AiFillCalendar className="calendar-style" />
          <p className="hour-style">{duration} hr</p>
        </div>
      </div>
      <p className="project-description-style">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="anchor-style"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
