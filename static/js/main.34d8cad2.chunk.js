(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var r,s=n(1),a=n(0),i=n.n(a),c=n(15),f=n.n(c),u=n(3),o=n(4),l=n.n(o),h=n(9),d=n(2),x=n(13);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(r||(r={}));var p=function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(t,"&difficulty=").concat(n,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return s=e.sent,e.abrupt("return",s.results.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{answers:(t=[].concat(Object(u.a)(e.incorrect_answers),[e.correct_answer]),Object(u.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=n(5),E=n(6);function b(){var e=Object(C.a)(["\n    transition: all 0.3s ease;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user-select: none;\n        font-size: 1rem;\n        width: 100%;\n        height: 40px;\n        margin: 5px 0; \n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n        border-radius: 10px;\n        color: #fff;\n        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n\n    }\n\n"]);return b=function(){return e},e}function g(){var e=Object(C.a)(["\n    max-width: 40vw;\n    background: #ebfeff;\n    border-radius: 10px;\n    border: 1.4px solid #d38558;\n    padding: 20px;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    text-align: center; \n\n    p {\n        font-size: 1.3rem;\n        font-family: 'Times New Roman', Times, serif;\n    }\n"]);return g=function(){return e},e}var y=E.b.div(g()),j=E.b.div(b(),(function(e){var t=e.correct,n=e.userClicked;return t?"linear-gradient(90deg, #56ffa4, #59bc86)":!t&&n?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #429DC4, #598D91)"})),w=function(e){var t=e.question,n=e.answers,r=e.callback,a=e.userAnswer,i=e.questionNr,c=e.totalQuestions;return Object(s.jsxs)(y,{children:[Object(s.jsxs)("p",{className:"number",children:["Question: ",i," / ",c]}),Object(s.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}),Object(s.jsx)("div",{children:n.map((function(e){return Object(s.jsx)(j,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===e,userClicked:(null===a||void 0===a?void 0:a.answer)===e,children:Object(s.jsx)("button",{disabled:!!a,value:e,onClick:r,children:Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})},e)}))})]})};function m(){var e=Object(C.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #000;\n  }\n\n  .score {\n    color: #000;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: Fascinate Impact, Haettenschweiler, "Arial Narrow Bold",\n      sans-serif;\n    background-image: linear-gradient(180deg, #fff, #ff6600);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start{\n      max-width: 200px;\n  }\n\n\n']);return m=function(){return e},e}function O(){var e=Object(C.a)(["\n    html {\n        height: 100%;\n    }    \n\n    body {\n        background-color: #ffffff;\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.16' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(108 1000 750) scale(25.15) translate(-960.24 -720.18)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n        background-attachment: fixed;\n        background-size: cover;\n\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: \"Catamaran\" sans-serif;\n    }\n"]);return O=function(){return e},e}var v=Object(E.a)(O()),k=E.b.div(m()),S=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),f=Object(d.a)(c,2),o=f[0],x=f[1],C=Object(a.useState)(0),E=Object(d.a)(C,2),b=E[0],g=E[1],y=Object(a.useState)([]),j=Object(d.a)(y,2),m=j[0],O=j[1],S=Object(a.useState)(0),U=Object(d.a)(S,2),T=U[0],z=U[1],q=Object(a.useState)(!0),N=Object(d.a)(q,2),A=N[0],_=N[1],M=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),_(!1),e.next=4,p(10,r.EASY);case 4:t=e.sent,x(t),z(0),O([]),g(0),i(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{}),Object(s.jsxs)(k,{children:[Object(s.jsx)("h1",{children:"React Quiz"}),A||10===m.length?Object(s.jsx)("button",{className:"start",onClick:M,children:"Start"}):null,A?null:Object(s.jsxs)("p",{className:"score",children:["Score: ",T]}),n&&Object(s.jsx)("p",{children:"Loading Question ..."}),!n&&!A&&Object(s.jsx)(w,{questionNr:b+1,totalQuestions:10,question:o[b].question,answers:o[b].answers,userAnswer:m?m[b]:void 0,callback:function(e){if(!A){var t=e.currentTarget.value,n=o[b].correct_answer===t;n&&z((function(e){return e+1}));var r={question:o[b].question,answer:t,correct:n,correctAnswer:o[b].correct_answer};O((function(e){return[].concat(Object(u.a)(e),[r])}))}}}),A||n||m.length!==b+1||9===b?null:Object(s.jsx)("button",{className:"next",onClick:function(){var e=b+1;10===e?_(!0):g(e)},children:"Next Question"})]})]})};f.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.34d8cad2.chunk.js.map