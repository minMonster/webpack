let dom = document.getElementById('root');
function Content() {
    let content = document.createElement('div');
    content.innerText = 'content';
    dom.append(content);
}
export default Content
