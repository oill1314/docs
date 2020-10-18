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
    ReactDOM.render(React.createElement(RedContent, {}, componentContainer.children[0].innerHTML), componentContainer)
  }
}

module.exports = RedContent
