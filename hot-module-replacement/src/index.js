import './style.css'
var btn = document.createElement('button')
btn.innerHTML = '新增'
btn.onclick = function () {
    var div = document.createElement('div')
    div.innerHTML = 'item'
    document.body.appendChild(div)
}
document.body.appendChild(btn)
