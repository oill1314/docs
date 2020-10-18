const React = require('react')
const ReactDOM = require('react-dom')

const BlueContent = (props) => {
  return (
    <div style={{ color: 'blue' }}>
      {props.children}
      {props.extra}
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-bluecontent')

  for (const componentContainer of componentContainers) {
    ReactDOM.render(React.createElement(BlueContent, {}, componentContainer.children[0].innerHTML), componentContainer)
  }
}

module.exports = BlueContent
