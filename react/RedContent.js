const React = require('react')
const ReactDOM = require('react-dom')

const RedContent = (props) => {
  return (
    <div style={{ color: 'red' }}>
      {props.children}
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-redcontent')

  for (const componentContainer of componentContainers) {
    ReactDOM.hydrate(React.createElement(RedContent), componentContainer)
  }
}

module.exports = RedContent
