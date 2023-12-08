import React from 'react'

function Section(props) {
  return (
    <div
      className='section'
      id={props.id}
      style={{ padding: props.padding }}
    >
      {props.children}
    </div>
  )
}

export default Section
