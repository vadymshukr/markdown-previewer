(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),s=(n(23),n(6)),c=n(7),l=n(9),d=n(8),h=n(1),u=n(10),m=(n(24),n(25),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleReset=n.handleReset.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.dataUpdate(e.target.value)}},{key:"handleReset",value:function(){this.props.dataReset()}},{key:"render",value:function(){return o.a.createElement("div",{className:"editor-section"},o.a.createElement("form",null,o.a.createElement("textarea",{name:"",id:"editor",cols:"30",rows:"10",onChange:this.handleChange,defaultValue:this.props.placeholder}),o.a.createElement("button",{type:"reset",onClick:this.handleReset},"Reset")))}}]),t}(o.a.Component));n(26);var f=function(e){return o.a.createElement("div",{className:"preview-section",id:"preview",dangerouslySetInnerHTML:{__html:e.viewContent}})},b=n(27);b.setOptions({breaks:!0});var p="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={content:b(p)},n.dataUpdate=n.dataUpdate.bind(Object(h.a)(n)),n.dataReset=n.dataReset.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"dataUpdate",value:function(e){this.setState({content:b(e)})}},{key:"dataReset",value:function(){this.setState({content:""}),p=""}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{dataUpdate:this.dataUpdate,dataReset:this.dataReset,placeholder:p}),o.a.createElement(f,{viewContent:this.state.content}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0687b918.chunk.js.map