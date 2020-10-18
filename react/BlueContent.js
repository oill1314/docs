const React = require('react')
const ReactDOM = require('react-dom')

const BlueContent = (props) => {
  return (
    <div style={{ color: 'blue' }}>
      {props.children}
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-bluecontent')

  for (const componentContainer of componentContainers) {
    ReactDOM.hydrate(React.createElement(BlueContent, {}, componentContainer.children), componentContainer)
  }
}

module.exports = BlueContent
