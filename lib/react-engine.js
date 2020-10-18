const babel = require('@babel/core')
const React = require('react')
const { renderToString } = require('react-dom/server')
const mdx = require('@mdx-js/mdx')
const { MDXProvider, mdx: createElement } = require('@mdx-js/react')
const BlueContent = require('../dist/react/BlueContent')
const RedContent = require('../dist/react/RedContent')
const Timer = require('../dist/react/Timer')

const transform = code =>
  babel.transform(code, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }).code

const renderReact = async componentStr => {
  let componentName
  if (componentStr.trim().startsWith('<BlueContent')) componentName = 'bluecontent'
  if (componentStr.trim().startsWith('<RedContent')) componentName = 'redcontent'
  if (componentStr.trim().startsWith('<Timer')) componentName = 'timer'

  const jsx = `<div className="react-component-${componentName}">\n${componentStr}\n</div>`
  const component = transform(jsx)

  return renderToString(eval(component))
}

module.exports = renderReact
