(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(6),r=n.n(a),l=(n(21),n(22),Object(o.memo)((function(){return c.a.createElement("header",null,c.a.createElement("h1",{className:"title"},"To-Do List"),c.a.createElement("p",{className:"desc"},"What is your One Small Step?"))}))),i=(n(23),n(2)),u=(n(24),Object(o.memo)((function(e){var t=e.addTodo,n=Object(o.useState)(""),a=Object(i.a)(n,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),l("")},className:"insert-form"},c.a.createElement("input",{className:"todo-input",type:"text",onChange:function(e){e.preventDefault(),l(e.target.value)},value:r,placeholder:"\ud560 \uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694."}),c.a.createElement("button",{className:"todo-submit-btn",type:"submit"},"\ucd94\uac00"))}))),d=n(1),s=n(15),m=n(4),f={todos:[{id:1,text:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud558\uae30",checked:!0},{id:2,text:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uacf5\ubd80\ud558\uae30",checked:!1},{id:3,text:"\ucc45 \uc77d\uae30",checked:!0},{id:4,text:"\uac8c\uc784\ud558\uae30",checked:!0},{id:5,text:"\uc6b4\ub3d9\ud558\uae30",checked:!1}],listType:"all"},b=6,p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/todo/ADD_TODO":return Object(m.a)({},e,{todos:[].concat(Object(s.a)(e.todos),[{id:b++,text:t.text,checked:!1}])});case"/todo/CHECK_TODO":return Object(m.a)({},e,{todos:e.todos.map((function(e){return e.id===t.id?Object(m.a)({},e,{checked:!e.checked}):e}))});case"/todo/DELETE_TODO":return Object(m.a)({},e,{todos:e.todos.filter((function(e){return e.id!==t.id}))});case"/todo/CHANGE_LIST_TYPE":return Object(m.a)({},e,{listType:t.listType});default:return e}},E=Object(d.b)("",{addTodo:function(e){return{type:"/todo/ADD_TODO",text:e}}})((function(e){var t=e.addTodo;return c.a.createElement(u,{addTodo:t})})),O=(n(31),Object(o.memo)((function(e){var t=e.todos,n=Object(o.useState)(),a=Object(i.a)(n,2),r=a[0],l=a[1],u=Object(o.useState)(),d=Object(i.a)(u,2),s=d[0],m=d[1],f=Object(o.useCallback)((function(){l(t.filter((function(e){return!1===e.checked})).length),m(t.filter((function(e){return!0===e.checked})).length)}),[t]);return Object(o.useEffect)((function(){f()}),[f]),c.a.createElement("p",{className:"todo-count"},"Doing : ",r," || completed: ",s)}))),h=Object(d.b)((function(e){return{todos:e.todos.todos}}),{})((function(e){var t=e.todos;return c.a.createElement(O,{todos:t})})),T=(n(32),Object(o.memo)((function(e){var t=e.listType,n=e.changeListType,o=function(e){n(e)};return c.a.createElement("ul",{className:"todo-button-list"},c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return o("all")},className:"all"===t?"active":""},"|| ALL")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return o("doing")},className:"doing"===t?"active":""},"|| DOING")),c.a.createElement("li",null,c.a.createElement("button",{type:"button",onClick:function(){return o("completed")},className:"completed"===t?"active":""},"|| COMPLETED")))}))),y=Object(d.b)((function(e){return{listType:e.todos.listType}}),{changeListType:function(e){return{type:"/todo/CHANGE_LIST_TYPE",listType:e}}})((function(e){var t=e.listType,n=e.changeListType;return c.a.createElement(T,{listType:t,changeListType:n})})),j=(n(33),n(14)),k=n.n(j),v=n(8),g=Object(o.memo)((function(e){var t=e.todo,n=e.checkTodo,o=e.deleteTodo,a=t.checked;return c.a.createElement("li",{className:"todo-item"},c.a.createElement("strong",{className:k()("item-text",{checked:a})},t.text),c.a.createElement("div",{className:"btn-box"},!0===a?c.a.createElement(v.a,{onClick:function(){return n(t.id)}}):c.a.createElement(v.b,{onClick:function(){return n(t.id)}}),c.a.createElement(v.c,{onClick:function(){return o(t.id)}})))})),D=Object(d.b)((function(e,t){return{todo:t.todo}}),{checkTodo:function(e){return{type:"/todo/CHECK_TODO",id:e}},deleteTodo:function(e){return{type:"/todo/DELETE_TODO",id:e}}})((function(e){var t=e.todo,n=e.deleteTodo,o=e.checkTodo;return c.a.createElement(g,{todo:t,deleteTodo:n,checkTodo:o})})),N=(n(34),Object(o.memo)((function(e){var t=e.listType,n=e.todos,a=Object(o.useState)([]),r=Object(i.a)(a,2),l=r[0],u=r[1],d=Object(o.useRef)("");return Object(o.useEffect)((function(){"doing"===t?(d.current="Cheer Up !",u(n.filter((function(e){return!1===e.checked})))):"completed"===t?(d.current="Congratulations !",u(n.filter((function(e){return!0===e.checked})))):(d.current="It's up to you !",u(n))}),[t,n]),c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement("h2",{className:"list-title"},d.current),c.a.createElement("ul",null,l.map((function(e){return c.a.createElement(D,{key:e.id,todo:e})}))))}))),C=Object(d.b)((function(e){return{todos:e.todos.todos,listType:e.todos.listType}}),{})((function(e){var t=e.todos,n=e.listType;return c.a.createElement(N,{todos:t,listType:n})}));var x=function(){return c.a.createElement("div",{className:"landing"},c.a.createElement(l,null),c.a.createElement(E,null),c.a.createElement(h,null),c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(3),_=Object(L.b)({todos:p}),w=Object(L.c)(_);r.a.render(c.a.createElement(d.a,{store:w},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.0d676125.chunk.js.map