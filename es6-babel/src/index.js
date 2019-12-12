// Tree Shaking
import { add } from './math'

add(2, 3)
let div = document.createElement('div')
div.innerHTML = 'add(2, 3)'
document.getElementById('root').appendChild(div)

