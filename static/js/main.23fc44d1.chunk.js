(this["webpackJsonphot-burgers"]=this["webpackJsonphot-burgers"]||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t(5),s=t(6),i=t(8),u=t(7),m=[{title:"Hot Burger \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f",url:"hot-burger-tverskaya",id:1},{title:"Hot Burger \u041c\u0430\u0440\u043e\u0441\u0435\u0439\u043a\u0430",url:"hot-burger-maroseyka",id:2},{title:"Hot Burger \u041f\u0435\u0442\u0440\u043e\u0432\u043a\u0430",url:"hot-burger-petrovka",id:3}],o=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={display:!1,title:"",url:""},e.displayList=function(){var a=e.state.display;e.setState({display:!a})},e.getTitle=function(a){var t=a.title,r=a.url;e.setState({title:t,url:r,display:!1})},e.goToRestaurant=function(){var a=e.state.url;e.props.history.push("/restaurant/".concat(a))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"restaurant_select"},n.a.createElement("div",{className:"restaraunt_select_top"},n.a.createElement("div",{onClick:this.displayList,className:"restaraunt_select_top_header font-effect-outline"},this.state.title?this.state.title:"\u0412\u042b\u0411\u0415\u0420\u0418\u0422\u0415 \u0420\u0415\u0421\u0422\u041e\u0420\u0410\u041d"),n.a.createElement("div",{className:"arrow_picker"},n.a.createElement("div",{className:"arrow_picker_up"}),n.a.createElement("div",{className:"arrow_picker_down"}))),this.state.display?n.a.createElement("div",{className:"restaraunt_select_bottom"},n.a.createElement("ul",null,m.map((function(a){return n.a.createElement("li",{onClick:function(){return e.getTitle(a)},key:a.id},a.title)})))):null,this.state.title&&!this.state.display?n.a.createElement("button",{onClick:this.goToRestaurant},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"):null)}}]),t}(n.a.Component),p=t(20),d=function(e){return n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"wrap"},n.a.createElement("div",{className:"header-content"},n.a.createElement("div",{className:"header-rating"},n.a.createElement("div",{className:"header-rating_tag"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),n.a.createElement("div",{className:"header-rating_icon"},"\u2605\u2605\u2605\u2605\u2605")),n.a.createElement("div",{className:"header-divider"}),n.a.createElement("h1",{className:"font-effect-fire-animation"},e.title),n.a.createElement("h3",null,n.a.createElement("span",null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0433\u043e\u0440\u044f\u0447\u0438\u0445",n.a.createElement("span",{className:"sub-header"},"#\u0431\u0443\u0440\u0433\u0435\u0440\u043e\u0432"))))))},g=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null," \u0412\u0430\u0448 \u0417\u0430\u043a\u0430\u0437"))}}]),t}(n.a.Component),f=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createBurger=function(a){a.preventDefault();var t={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addBurger(t)},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"burger-edit",onSubmit:this.createBurger},n.a.createElement("input",{ref:this.nameRef,name:"name",type:"text",placeholder:"Name",autoComplete:"off"}),n.a.createElement("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"Price",autoComplete:"off"}),n.a.createElement("select",{ref:this.statusRef,name:"status",className:"status"},n.a.createElement("option",{value:"available"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"),n.a.createElement("option",{value:"unavailable"},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043c\u0435\u043d\u044e")),n.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"Desc"}),n.a.createElement("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"Image",autoComplete:"off"}),n.a.createElement("button",{type:"submit"},"+\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u041c\u0435\u043d\u044e"))}}]),t}(n.a.Component),b=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"menu-admin"},n.a.createElement("h2",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u041c\u0435\u043d\u044e"),n.a.createElement(f,{addBurger:this.props.addBurger}),n.a.createElement("button",{onClick:this.props.loadSampleBurgers},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u0443\u0440\u0433\u0435\u0440\u044b"))}}]),t}(n.a.Component),h=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.details,a=e.image,t=e.name,r=e.price,c=e.desc;e.status;return n.a.createElement("li",{className:"menu-Burger"},n.a.createElement("div",{className:"image-container"},n.a.createElement("img",{src:a,alt:t})),n.a.createElement("div",{className:"burger-details"},n.a.createElement("h3",{className:"burger-name"},t,n.a.createElement("span",{className:"price"},r)),n.a.createElement("p",null,c),n.a.createElement("button",{className:"buttonOrder"},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c")))}}]),t}(n.a.Component),v={burger1:{name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/cheese.jpg",desc:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0441 \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u0431\u0443\u043b\u043e\u0447\u043a\u043e\u0439.",price:110,status:"available"},burger2:{name:"\u0427\u0438\u043a\u0435\u043d\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/chicken.jpg",desc:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430, \u0441\u043e\u0443\u0441\u0430 \u0411\u0430\u0440\u0431\u0435\u043a\u044e \u0438 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0430\u043b\u0430\u0442\u0430.",price:140,status:"available"},burger3:{name:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/double.jpg",desc:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0438 \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c \u0441\u043e\u0443\u0441\u043e\u043c.",price:200,status:"unavailable"},burger4:{name:"\u0424\u0438\u0448\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/fish.jpg",desc:"\u0420\u044b\u0431\u043d\u043e\u0435 \u0444\u0438\u043b\u0435 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043b\u0435\u0433\u043a\u0438\u043c \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:150,status:"available"},burger5:{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0424\u0440\u0438",image:"/images/fries.jpg",desc:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043b\u043e\u043c\u0442\u0438\u043a\u0438 \u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u043e\u0433\u043e \u0433\u043e\u0440\u044f\u0447\u0435\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0421\u0443\u043f\u0435\u0440 \u0424\u0440\u0438, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u043d\u0435\u043f\u043b\u043e\u0434\u0430!",price:85,status:"available"},burger6:{name:"King \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/ham.jpg",desc:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0438\u0437 100% \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u0441 \u0436\u0430\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043b\u043e\u043c\u0442\u0438\u043a\u0430\u043c\u0438 \u0431\u0435\u043a\u043e\u043d\u0430 \u0438 \u0441\u0432\u0435\u0436\u0438\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c, \u0437\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0435\u0442\u0447\u0443\u043f\u043e\u043c \u0438 \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:450,status:"available"},burger7:{name:"\u041c\u0435\u0433\u0430 \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/mega.jpg",desc:"\u041d\u0430\u0448 \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u0440\u0433\u0435\u0440, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u0430, \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430 \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u0441\u043e\u043b\u0435\u043d\u044b\u0445 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u043e\u0432.",price:500,status:"available"},burger8:{name:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0432 \u041f\u0438\u0442\u0435",image:"/images/pita.jpg",desc:"\u0427\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0442\u043b\u0435\u0442\u044b \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u043f\u043e\u043a\u0440\u044b\u0442\u044b\u0435 \u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440, \u0441\u043e \u0441\u0432\u0435\u0436\u0438\u043c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c \u0432 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u043b\u0435\u043f\u0435\u0448\u043a\u0435.",price:380,status:"available"},burger9:{name:"Village \u0424\u0440\u0438",image:"/images/bakedFries.jpg",desc:"\u041f\u043e\u0440\u0446\u0438\u044f \u0441\u0432\u0435\u0436\u0438\u0445 \u043b\u043e\u043c\u0442\u0438\u043a\u043e\u0432 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u044b\u0445 \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435 \u043f\u043e\u0434 \u043c\u0438\u0440\u043d\u043e \u0442\u043b\u0435\u044e\u0449\u0438\u043c\u0438 \u0443\u0433\u043b\u044f\u043c\u0438",price:90,status:"available"}},E=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={burgers:{},order:{}},e.addBurger=function(a){var t=Object(p.a)({},e.state.burgers);t["burger".concat(Date.now())]=a,e.setState({burgers:t})},e.loadSampleBurgers=function(){e.setState({burgers:v})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"burger-paradise"},n.a.createElement("div",{className:"menu"},n.a.createElement(d,{title:"Very Hot Burger"}),n.a.createElement("ul",{className:"burgers"},Object.keys(this.state.burgers).map((function(a){return n.a.createElement(h,{key:a,index:a,details:e.state.burgers[a]})})))),n.a.createElement(g,null),n.a.createElement(b,{addBurger:this.addBurger,loadSampleBurgers:this.loadSampleBurgers}))}}]),t}(n.a.Component),j=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"The page is Not Found"))},y=t(18),N=t(1),O=function(){return n.a.createElement(y.a,null,n.a.createElement(N.c,null,n.a.createElement(N.a,{exact:!0,path:"/",component:o}),n.a.createElement(N.a,{path:"/restaurant/:restaurantId",component:E}),n.a.createElement(N.a,{component:j})))};t(31);Object(c.render)(n.a.createElement(O,null),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.23fc44d1.chunk.js.map