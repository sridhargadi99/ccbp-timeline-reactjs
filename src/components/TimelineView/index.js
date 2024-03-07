// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const timelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="heading-style1">
        MY JOURNEY OF <br />
        <span className="heading-style2">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: 'blue',
            secondary: 'white',
            titleColor: 'blue',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachView =>
            eachView.categoryId === 'COURSE' ? (
              <CourseTimelineCard eachView={eachView} key={eachView.id} />
            ) : (
              <ProjectTimelineCard eachView={eachView} key={eachView.id} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default timelineView
