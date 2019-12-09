import pnggg from '../assets/gongshang-icon.jpeg'
let dom = document.getElementById('root')
import style from '../less/index.less'
function CreatedImg () {
  let imgDom = new Image()
  imgDom.src = pnggg
  imgDom.classList.add(style['icon-gs'])

  dom.append(imgDom)
}

export default CreatedImg
