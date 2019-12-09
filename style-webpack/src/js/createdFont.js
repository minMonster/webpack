let dom = document.getElementById('root')
import fontStyle from '../less/font.less'
function CreatedFont () {
  let fontDom = document.createElement('div')
  fontDom.classList.add(fontStyle['iconfont'])
  fontDom.classList.add(fontStyle['icon-fukuan'])

  dom.append(fontDom)
}

export default CreatedFont
