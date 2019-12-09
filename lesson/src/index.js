// ES Moudule 模块引入方式
import Header from './js/header'
import Content from './js/content'
import Sidebar from './js/sidebar'
// 面向过程代码
// let header = document.createElement('div');
// header.innerText = 'header';
// dom.append(header);
//
// let sidebar = document.createElement('div');
// sidebar.innerText = 'sidebar';
// dom.append(sidebar);
//
// let content = document.createElement('div');
// content.innerText = 'content';
// dom.append(content);

// 面向对象代码
new Header();
new Sidebar();
new Content();
