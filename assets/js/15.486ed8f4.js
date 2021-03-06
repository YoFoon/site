(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{210:function(t,e,a){"use strict";a.r(e);var n=a(4),i=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"点击空白处隐藏弹出元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击空白处隐藏弹出元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 点击空白处隐藏弹出元素")]),t._v(" "),a("p",[t._v("react 经常会遇到这样的需求：点击某处按钮或者其他，弹出某一个元素 A，然后点击这个元素 A 之外的地方可以隐藏这个弹出的元素 A。")]),t._v(" "),a("p",[t._v("有两种方式可以实现这需求")]),t._v(" "),a("h4",{attrs:{id:"_1-在这个弹出层的后面放一个透明的遮罩层，然后在点击遮罩层的时候隐藏弹窗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在这个弹出层的后面放一个透明的遮罩层，然后在点击遮罩层的时候隐藏弹窗","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.在这个弹出层的后面放一个"),a("strong",[t._v("透明的遮罩层")]),t._v("，然后在点击遮罩层的时候隐藏弹窗")]),t._v(" "),a("h4",{attrs:{id:"_2-利用-react-的阻止冒泡e-nativeevent-stopimmediatepropagation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用-react-的阻止冒泡e-nativeevent-stopimmediatepropagation","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.利用 react 的阻止冒泡"),a("code",[t._v("e.nativeEvent.stopImmediatePropagation()")])]),t._v(" "),a("p",[t._v("首先监听全局的点击事件，注意在移除组件的时候取消监听")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("componentDidMount() {\n  document.addEventListener('click', this.hideModal)\n}\ncomponentWillUnmount() {\n  document.removeEventListener('click', this.hideModal)\n}\nhideModal() {\n\tthis.setState({visible: false})\n}\n")])])]),a("p",[t._v("然后在弹出层的最顶级元素阻止冒泡")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//阻止冒泡\nhandleClick = e => {\n\te.nativeEvent.stopImmediatePropagation()\n}\nrender() {\n\treturn (\n   \t<div onClick={this.handleClick}>\n    \t ...\n  \t </div>\n\t)\n}\n")])])])])},[],!1,null,null,null);e.default=i.exports}}]);