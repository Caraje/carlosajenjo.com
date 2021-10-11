(this["webpackJsonpcarlosajenjo.com"]=this["webpackJsonpcarlosajenjo.com"]||[]).push([[0],{31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(17),o=t.n(s),r=t(5),n=t(2),i=t(11),l=t(14),j=t(8),d=t(20),_=t(0),m=function(){var e=Object(c.useState)({from_name:"",to_name:"",message:"",reply_to:""}),a=Object(j.a)(e,2),t=a[0],s=a[1],o=function(e){s(Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"contenedor",children:[Object(_.jsx)("h2",{className:"title__form",children:"Contacto"}),Object(_.jsx)("div",{className:"form",children:Object(_.jsxs)("form",{className:"form__group",onSubmit:function(e){e.preventDefault(),Object(d.a)("service_9v2pb4s","template_l705ttg",t,"user_Y1kHNbFyduuggaNWwl630").then((function(e){console.log("Exito!",e.status,e.text),console.log(t),alert("Correo enviado correctamente")})).catch((function(e){alert("Hay un error, por favor intentelo mas tarde")}))},children:[Object(_.jsx)("textarea",{cols:"30",rows:"10",className:"form__group__text",type:"text",id:"texto",name:"message",placeholder:"Escriba su consulta:",value:t.message,onChange:o}),Object(_.jsx)("input",{className:"form__group__input",type:"text",id:"nombre",name:"to_name",value:t.to_name,onChange:o,placeholder:"Nombre:",required:!0}),Object(_.jsx)("input",{className:"form__group__input",type:"email",id:"email",name:"reply_to",value:t.reply_to,onChange:o,placeholder:"Correo Electronico",required:!0}),Object(_.jsx)("button",{type:"submit",className:"form__group__btn",children:"Enviar"})]})})]})})},b=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("a",{href:"https://www.linkedin.com/in/carlos-ajenjo-19662076/",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-linkedin"})}),Object(_.jsx)("a",{href:"https://twitter.com/caraje_",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-twitter"})}),Object(_.jsx)("a",{href:"https://github.com/Caraje",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-github-square"})}),Object(_.jsx)("a",{href:"https://www.instagram.com/carlosajenjo_com/",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-instagram"})}),Object(_.jsx)("a",{href:"https://www.twitch.tv/caraje_",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-twitch"})}),Object(_.jsx)("a",{href:"https://www.youtube.com/channel/UCiY_SNkOx5yAjlujkrJtmCw",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon-footer fab fa-youtube"})})]})},u=function(){return Object(_.jsx)("ul",{id:"menu-hidden",className:"navmenu",children:Object(_.jsxs)("div",{id:"",className:"menu",children:[Object(_.jsx)(r.c,{activeClassName:"menu-disabled",className:"menu__link",exact:!0,to:"/",children:"Inicio"}),Object(_.jsx)(r.c,{activeClassName:"menu-active",className:"menu__link",exact:!0,to:"/about",children:"Sobre Mi"}),Object(_.jsx)(r.c,{activeClassName:"menu-active",className:"menu__link",exact:!0,to:"/portfolio",children:"Portfolio"}),Object(_.jsx)(r.c,{activeClassName:"menu-active",className:"menu__link",exact:!0,to:"/contact",children:"Contacto"})]})})},p=function(){var e=Object(_.jsx)("button",{className:"menubar__btn",onClick:function(){var e=document.getElementById("menu_toggle"),a=document.getElementById("menu-hidden");e.classList.toggle("hidden"),a.classList.toggle("menu-hidden")},children:Object(_.jsx)("i",{id:"menubar__btn",className:" fas fa-bars"})}),a=window.innerWidth,t=Object(c.useState)(a),s=Object(j.a)(t,2),o=s[0],n=s[1];return window.addEventListener("resize",(function(){n(window.screen.width)})),Object(_.jsxs)("div",{className:"menubar",children:[Object(_.jsxs)("div",{className:"menubar__container",children:[Object(_.jsx)(r.b,{className:"menubar__container__logo",to:"/",children:Object(_.jsx)("img",{className:"menubar__img",src:"/assets/logos/logoh.png",alt:"Logo Carlosajenjo.com"})}),Object(_.jsx)("div",{children:o>832?Object(_.jsx)(u,{}):e})]}),Object(_.jsx)("div",{id:"menu_toggle",className:"menubar__hidden-menu hidden",children:Object(_.jsx)(u,{})})]})},h=function(){return Object(_.jsxs)("div",{className:"contenedor",children:[Object(_.jsx)("header",{children:Object(_.jsx)(p,{})}),Object(_.jsx)("main",{className:"container aboutpage",children:Object(_.jsxs)("section",{className:"about-container",children:[Object(_.jsx)("img",{className:"about-container__img",title:"Carlos Ajenjo",src:"./assets/images/Carlos_about.jpg",alt:"Carlos Ajenjo Dise\xf1ador y desarrollador Web"}),Object(_.jsxs)("article",{className:"about-container__section",children:[Object(_.jsx)("h2",{className:"about-container__section__title",children:"Quien Soy"}),Object(_.jsx)("p",{className:"about-container__section__text",children:"A lo largo de mi vida profesional, Casi siempre he alcanzado puestas de responsabilidad para las empresas que he trabajado o colaborado, sin importar mi experiencia previa en el sector."}),Object(_.jsxs)("p",{className:"about-container__section__text",children:["Esto ha sido gracias a ",Object(_.jsx)("span",{children:"mi capacidad de adaptarme "})," a las diferentes situaciones, a la capacidad de aprender y especialmente por afrontar los retos que se me han planteado profesionalmente."]}),Object(_.jsxs)("p",{className:"about-container__section__text",children:["Mis inquietudes personales me han llevado a ser autodidacta, aprendiendo todo aquello que de una manera o de otra me interesaba y pod\xeda ofrecerme nuevas posibilidades laborales, lo que me ha llevado a ",Object(_.jsx)("span",{children:"trabajar como dise\xf1ador gr\xe1fico"})," los \xfaltimos 15 a\xf1os, hasta que descubr\xed mi inter\xe9s en el ",Object(_.jsx)("span",{children:"Desarrollo Web"}),", al tener que preparar un trabajo en plena pandemia."]}),Object(_.jsxs)("p",{className:"about-container__section__text",children:["Desde hace aproximadamente un a\xf1o, he estado form\xe1ndome en ",Object(_.jsx)("span",{children:"HTML"}),", ",Object(_.jsx)("span",{children:"CSS"})," y especialmente en ",Object(_.jsx)("span",{children:"JavaScript"}),", mas tarde di el salto a ",Object(_.jsx)("span",{children:"React"}),", para comenzar a interesarme por Node.js y Sass."]}),Object(_.jsx)("p",{className:"about-container__section__text",children:"Tengo en mi lista de pendientes otros lenguajes de programaci\xf3n que espero aprender tambi\xe9n mientras perfecciono mis conocimientos en los actuales."}),Object(_.jsx)("p",{className:"about-container__section__text",children:"Me gustan los retos, y cuando me meto en un nuevo proyecto, este ocupa gran parte de mi tiempo hasta lograr hacer el mejor trabajo que pueda ofrecer."})]})]})}),Object(_.jsxs)("div",{className:"tecno",children:[Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-html5"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"HTML "})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-css3-alt"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"CSS"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-js-square"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Javascript"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-react"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"React"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-node-js"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Node.js"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-sass"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Sass"})]})]}),Object(_.jsx)("div",{className:"contenedor",children:Object(_.jsx)(m,{})}),Object(_.jsx)("footer",{className:"footer footer-about ",children:Object(_.jsx)(b,{})})]})},x=function(){var e=Object(c.useState)(""),a=Object(j.a)(e,2),t=(a[0],a[1],Object(c.useState)("")),s=Object(j.a)(t,2),o=(s[0],s[1],Object(c.useState)("")),r=Object(j.a)(o,2);r[0],r[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(p,{}),Object(_.jsxs)("div",{className:"contenedor",children:[Object(_.jsx)(m,{}),Object(_.jsx)("footer",{className:"footer footer-contact ",children:Object(_.jsx)(b,{})})]})]})},O=[{id:"01",title:"Emparejados",description:["En esta versi\xf3n del cl\xe1sico juego de buscar parejas, podremos encontrar 20 videojuegos salidos al mercado en los \xfaltimos a\xf1os."," La mec\xe1nica es sencilla, levanta una carta y al levantar la segunda se comprueba si estas coinciden o no, en caso de hacerlo ganas 10 puntos, en caso de no hacerlo, pierdes 5 puntos y las cartas vuelven a su posici\xf3n original."," La idea es practicar la creaci\xf3n del juego usando React para comprender mejor la comunicaci\xf3n entre diferentes componentes.","Adem\xe1s, se he empezado a experimentar con este proyecto el uso de Sass para darle estilos a los diferentes componentes. "],descriptionShort:"Versi\xf3n del popular juego de buscar parejas creado con React",imagen:"portada.png",tecnologies:["html","css","js","react","sass"],url:"emparejados",pictures:["01.png","02.png","03.png","04.png","05.png"],github:"https://github.com/Caraje/Emparejados",demo:"https://caraje.github.io/Emparejados/"},{id:"02",title:"GifApp",description:["Usando React, se ha creado una aplicaci\xf3n que hace peticiones a la Apu de giphy.com con la b\xfasqueda que introduzca el usuario.","Adem\xe1s, en la pantalla principal se muestran categor\xedas predefinidas por la propia aplicaci\xf3n como los gifs m\xe1s populares, sobre videojuegos, cine y otras que se muestran en funci\xf3n de los datos recibidos desde giphy.com.","Los estilos se los he dado usando Sass"],descriptionShort:"Buscador de gifs usando la API de giphy.com",imagen:"portada.jpg",tecnologies:["html","css","js","react","sass"],url:"GifApp",pictures:["01.jpg","02.jpg","03.png"],github:"https://github.com/Caraje/gifsApp",demo:"https://caraje.github.io/gifsApp/"},{id:"03",title:"BlackJack",description:["He creado un juego sencillo de cartas en el que poder practicar con Javascript y el funcionamiento del DOM, as\xed como de la l\xf3gica","El funcionamiento del juego es sencillo, al entrar a la app, el jugador puede introducir un nombre para poder empezar su partida.","Durante la partida el jugador solicita a la CPU cartas hasta que cree que pueden sumar un m\xe1ximo de 21 puntos, en caso de que lo supere el jugador pierde.","Si el jugador no supera los 21 puntos, pasa el turno a la CPU, que ira pidiendo cartas hasta superar la puntuaci\xf3n del jugador o pasarse de 21 puntos."],descriptionShort:"Juego de cartas BlackJack usando Javascript Vanilla",imagen:"portada.png",tecnologies:["html","css","js"],url:"BlackJack",pictures:"",github:"https://github.com/Caraje/BalckJack",demo:"https://blackjack-caraje.netlify.app/"}],g=function(e){var a=e.tec;return Object(_.jsx)("div",{className:"tecnologies-group",children:Object(_.jsx)("img",{className:"tecnologies-group__img",src:"/assets/images/tecnologies/".concat(a,".png"),alt:a})})},f=function(e){e.id;var a=e.title,t=(e.description,e.descriptionShort),c=e.img,s=e.tec;e.url,e.pictures;return Object(_.jsxs)("div",{className:"cardPortfolio",children:[Object(_.jsx)("img",{className:"cardPortfolio__img",src:"./assets/images/portfolio/".concat(a,"/").concat(c),alt:"Foto principal de ".concat(a)}),Object(_.jsxs)("div",{className:"cardPortfolio__text",children:[Object(_.jsxs)("h3",{className:"cardPortfolio__text__title",children:[" ",a," "]}),Object(_.jsxs)("p",{className:"cardPortfolio__text__desc",children:[" ",t]}),Object(_.jsx)(r.b,{className:"cardPortfolio__text__link",to:"/portfolio/".concat(a),children:"Ver el Proyecto"}),Object(_.jsx)("div",{className:"cardPortfolio__text__tec",children:s.map((function(e,a){return Object(_.jsx)("div",{className:"cardPortfolio__text__tec__img",children:Object(_.jsx)(g,{tec:e})},a)}))})]})]})},N=function(e){var a=e.limit;return Object(_.jsx)("div",{children:O.slice(0,a).map((function(e,a){return Object(_.jsx)("div",{children:Object(_.jsx)(f,{id:e.id,title:e.title,description:e.description,descriptionShort:e.descriptionShort,img:e.imagen,tec:e.tecnologies,url:e.url,pictures:e.pictures},a)},a)}))})},v=function(){return Object(_.jsxs)("div",{className:"socialnetwork",children:[Object(_.jsx)("a",{href:"https://www.linkedin.com/in/carlos-ajenjo-19662076/",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon fab fa-linkedin"})}),Object(_.jsx)("a",{href:"https://twitter.com/caraje_",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon fab fa-twitter"})}),Object(_.jsx)("a",{href:"https://github.com/Caraje",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon fab fa-github-square"})}),Object(_.jsx)("a",{href:"https://www.instagram.com/caraje_dev/",target:"_blank",rel:"noreferrer",children:Object(_.jsx)("i",{className:"socialnetwork__icon fab fa-instagram"})})]})},w=function(){return Object(_.jsxs)("div",{className:"tecno",children:[Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-html5"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"HTML "})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-css3-alt"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"CSS"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-js-square"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Javascript"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-react"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"React"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-node-js"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Node.js"})]}),Object(_.jsxs)("div",{className:"tecno__group",children:[Object(_.jsx)("i",{className:"tecno__group__icon fab fa-sass"}),Object(_.jsx)("h3",{className:"tecno__group__text",children:"Sass"})]})]})},k=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("header",{className:"home",children:Object(_.jsxs)("div",{className:"home__logo",children:[Object(_.jsx)("img",{className:"home__logo__img",src:"./assets/logos/logov.png",alt:"Logo Carlos Ajenjo"}),Object(_.jsx)("h1",{className:"home__title",children:"Dise\xf1o y Desarrollo Web"}),Object(_.jsx)("div",{className:"home__menu",children:Object(_.jsx)(u,{})}),Object(_.jsx)("div",{className:"home__socialnetwork",children:Object(_.jsx)(v,{})})]})}),Object(_.jsx)("main",{id:"about",className:"about",children:Object(_.jsxs)("div",{className:"about__container",children:[Object(_.jsx)("img",{title:"Carlosajenjo.com",className:"about__container__img",src:"./assets/Carlos.webp",alt:"Imagen de carlos ajenjo"}),Object(_.jsxs)("div",{className:"about__container__text",children:[Object(_.jsx)("h2",{className:"about__container__text__title",children:"Sobre Mi"}),Object(_.jsxs)("p",{className:" about__container__text__parragraph",children:["Soy",Object(_.jsx)("span",{children:" Carlos Ajenjo."})]}),Object(_.jsxs)("p",{className:" about__container__text__parragraph",children:["He trabajado como ",Object(_.jsx)("span",{children:"dise\xf1ador"})," los \xfaltimos 15 a\xf1os, Y en el ultimo a\xf1o he comenzado a convertirme en ",Object(_.jsx)("span",{children:" el mejor desarrollador web"})," que pueda llegar a ser."]}),Object(_.jsxs)("p",{className:" about__container__text__parragraph",children:["Y soy una de ",Object(_.jsx)("span",{children:"las mejores opciones "})," para tu proyecto o negocio."]}),Object(_.jsx)("a",{className:"about__buttom",href:"/about",rel:"noreferrer",children:"Leer M\xe1s"})]})]})}),Object(_.jsxs)("section",{className:"tecnologies",children:[Object(_.jsx)("h2",{className:"tecnologies__title",children:"Tecnologias"}),Object(_.jsx)(w,{})]}),Object(_.jsxs)("section",{className:"portfolio",children:[Object(_.jsx)("h2",{className:"portfolio__title",children:"Portfolio"}),Object(_.jsx)("div",{className:"portfolio__container",children:Object(_.jsx)(N,{limit:2})})]}),Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)(b,{})})]})},y=function(e){var a=e.pictures,t=e.path;return Object(_.jsx)("div",{className:"",children:Object(_.jsx)("img",{className:"",src:"/assets/images/portfolio/".concat(t,"/").concat(a),alt:a})})},C=function(){var e=function(e){return O.find((function(a){return a.title===e}))}(Object(n.g)().workName);if(!e)return Object(_.jsx)(n.a,{to:"/portfolio"});var a=e.title,t=e.description,c=e.imagen,s=e.tecnologies,o=e.pictures,i=e.github,l=e.demo;return console.log(i),Object(_.jsxs)("div",{children:[Object(_.jsx)(p,{}),Object(_.jsxs)("div",{className:"container portfolioProject",children:[Object(_.jsx)("img",{className:"portfolioProject__header",src:"/assets/images/portfolio/".concat(a,"/").concat(c),alt:"Foto principal de ".concat(a)}),Object(_.jsxs)("div",{className:" portfolioProject__info ",children:[Object(_.jsx)("h2",{className:" portfolioProject__info__title ",children:a}),Object(_.jsxs)("div",{className:" portfolioProject__info__text ",children:[t?Object(_.jsx)("div",{children:t.map((function(e,a){return Object(_.jsxs)("p",{children:[" ",e," "]},a)}))}):null,Object(_.jsxs)("div",{className:"portfolioProject__info__text__container ",children:[Object(_.jsx)("div",{className:"portfolioProject__info__text__container__tec",children:s.map((function(e,a){return Object(_.jsx)("div",{className:"portfolioProject__info__text__container__tec__img",children:Object(_.jsx)(g,{tec:e})},a)}))}),Object(_.jsxs)("div",{children:[i?Object(_.jsxs)("a",{className:"portfolioProject__info__text__container__btn",href:i,target:"_blank",rel:"noreferrer",children:["Github ",Object(_.jsx)("i",{className:"fab fa-github"})]}):null,l?Object(_.jsxs)("a",{className:"portfolioProject__info__text__container__btn",href:l,target:"_blank",rel:"noreferrer",children:["Demo ",Object(_.jsx)("i",{className:"fas fa-laptop"})]}):null]})]}),o?Object(_.jsx)("div",{className:"portfolioProject__info__album",children:o.map((function(e,t){return Object(_.jsx)("div",{className:"",children:Object(_.jsx)(y,{pictures:e,path:a})},t)}))}):null]}),Object(_.jsx)(r.b,{className:"portfolioProject__info__btn",to:"/portfolio",children:"Volver"})]})]}),Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)(b,{})})]})},S=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(p,{}),Object(_.jsx)("div",{className:"portfolio__container",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:"portolio__container_title",children:"Portfolio"}),Object(_.jsx)(N,{limit:10})]})})]})},P=function(){return Object(_.jsx)(r.a,{children:Object(_.jsx)("div",{children:Object(_.jsxs)(n.d,{children:[Object(_.jsx)(n.b,{exact:!0,path:"/about",component:h}),Object(_.jsx)(n.b,{exact:!0,path:"/contact",component:x}),Object(_.jsx)(n.b,{exact:!0,path:"/portfolio",component:S}),Object(_.jsx)(n.b,{exact:!0,path:"/portfolio/:workName",component:C}),Object(_.jsx)(n.b,{exact:!0,path:"/",component:k}),Object(_.jsx)(n.a,{to:"/"})]})})})},q=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(P,{})})};t(31);o.a.render(Object(_.jsx)(q,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.12d11837.chunk.js.map