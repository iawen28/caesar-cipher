(this["webpackJsonpcaesar-cipher"]=this["webpackJsonpcaesar-cipher"]||[]).push([[0],{50:function(e,a,t){e.exports=t(60)},55:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),i=(t(55),t(14)),u=t(15),s=t(21),h=t(16),o=t(22),m=t(92),v=function(e){function a(e){return Object(i.a)(this,a),Object(s.a)(this,Object(h.a)(a).call(this,e))}return Object(o.a)(a,e),Object(u.a)(a,[{key:"changeHandler",value:function(e){console.log(e.target.value),"function"===typeof this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"left"},l.a.createElement("center",null,l.a.createElement("h2",null,"Plaintext"),l.a.createElement(m.a,{multiline:!0,rowsMax:"10",margin:"normal",placeholder:"Enter plaintext",value:this.props.value,onChange:this.changeHandler.bind(this)})))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"right"},l.a.createElement("center",null,l.a.createElement("h2",null,"Ciphertext"),l.a.createElement(m.a,{multiline:!0,rowsMax:"10",margin:"normal",value:this.props.value})))}}]),a}(n.Component),E=t(90),b=t(91),f=function(e){function a(e){return Object(i.a)(this,a),Object(s.a)(this,Object(h.a)(a).call(this,e))}return Object(o.a)(a,e),Object(u.a)(a,[{key:"changeHandler",value:function(e){console.log(e.target.value),"function"===typeof this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"shift"},l.a.createElement(b.a,null,l.a.createElement(E.a,{value:this.props.value,onChange:this.changeHandler.bind(this),name:"cipher",displayEmpty:!0},l.a.createElement(b.a,{value:"0",disabled:!0},"Select number"),l.a.createElement(b.a,{value:"1"},"1"),l.a.createElement(b.a,{value:"2"},"2"),l.a.createElement(b.a,{value:"3"},"3"),l.a.createElement(b.a,{value:"4"},"4"),l.a.createElement(b.a,{value:"5"},"5"),l.a.createElement(b.a,{value:"6"},"6"),l.a.createElement(b.a,{value:"7"},"7"),l.a.createElement(b.a,{value:"8"},"8"),l.a.createElement(b.a,{value:"9"},"9"),l.a.createElement(b.a,{value:"10"},"10"),l.a.createElement(b.a,{value:"11"},"11"),l.a.createElement(b.a,{value:"12"},"12"),l.a.createElement(b.a,{value:"13"},"13"),l.a.createElement(b.a,{value:"14"},"14"),l.a.createElement(b.a,{value:"15"},"15"),l.a.createElement(b.a,{value:"16"},"16"),l.a.createElement(b.a,{value:"17"},"17"),l.a.createElement(b.a,{value:"18"},"18"),l.a.createElement(b.a,{value:"19"},"19"),l.a.createElement(b.a,{value:"20"},"20"),l.a.createElement(b.a,{value:"21"},"21"),l.a.createElement(b.a,{value:"22"},"22"),l.a.createElement(b.a,{value:"23"},"23"),l.a.createElement(b.a,{value:"24"},"24"),l.a.createElement(b.a,{value:"25"},"25"))))}}]),a}(n.Component),g=t(89),d=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(h.a)(a).call(this,e))).state={text:"",cipher:0,encryption:""},t}return Object(o.a)(a,e),Object(u.a)(a,[{key:"changeText",value:function(e){this.setState({text:e}),this.encrypt(e,parseInt(this.state.cipher))}},{key:"changeCipher",value:function(e){this.setState({cipher:e}),this.encrypt(this.state.text,parseInt(e))}},{key:"encrypt",value:function(e,a){for(var t="",n=0;n<e.length;n++){var l=e.charCodeAt(n),r=l;l>=65&&l<=90?r=(l-65+a)%26+65:l>=97&&l<=122&&(r=(l-97+a)%26+97),t+=String.fromCharCode(r)}this.setState({encryption:t})}},{key:"render",value:function(){return l.a.createElement("div",{id:"mainApp"},l.a.createElement(g.a,{elevation:10,className:"child-container"},l.a.createElement(v,{value:this.state.text,onChange:this.changeText.bind(this)}),l.a.createElement(f,{value:this.state.cipher,onChange:this.changeCipher.bind(this)}),l.a.createElement(p,{value:this.state.encryption})))}}]),a}(n.Component);c.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.936c1bd7.chunk.js.map