import React from 'react'
import './styles.css'

const Circle = ({
  clicked,
  color,
  text,
  style
}) => {
  return (
    <div className="Circle-Block">
      <div
        className="Circle-Circle"
        onClick={clicked ? clicked : null}
        style={{ backgroundColor: color, ...style }} >
      </div>
      {
        text && (
          <div className="Circle-Text">
            { text }
          </div>
        )
      }
    </div>
  )
}

export default Circle
