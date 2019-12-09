let dom = document.getElementById('root')

function Content () {
  let content = document.createElement('div')
  content.innerHTML = 'content'
  dom.append(content)
}
export default Content
