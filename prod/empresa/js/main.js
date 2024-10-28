document.getElementById("particles-1")&&particlesJS("particles-1",{particles:{number:{value:40,density:{enable:!0,value_area:4e3}},color:{value:["#FFFFFF","#FFFFFF","#FFFFFF"]},shape:{type:"image",stroke:{width:0,color:"#fff"},polygon:{nb_sides:6},image:{src:"./imgs/logot_opacity_10.png",width:100,height:100}},opacity:{value:.15,random:!0,anim:{enable:!0,speed:.2,opacity_min:.15,sync:!1}},size:{value:50,random:!0,anim:{enable:!0,speed:2,size_min:5,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:0,rotateY:0}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});const div1=document.querySelector("header"),div2=document.querySelector(".particles");div2.style.height=div1.offsetHeight+"px",$(document).ready((function(){$("a.page-scroll").on("click",(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t);n.length&&$("html, body").animate({scrollTop:n.offset().top},400)}))}));let dedoview=!1;$(window).on("scroll",(function(e){$(window).scrollTop()<300?(gsap.to(".fa-circle-chevron-left",{y:100}),dedoview||setTimeout((()=>{gsap.to(".fa-hand-pointer",{display:"inline"}),dedoview=!0}),3e3)):gsap.to(".fa-circle-chevron-left",{y:-20})}));const icon=document.getElementById("icon"),sections=document.querySelectorAll("section, footer");let text_anim=!1;function checkSection(){sections.forEach((e=>{const t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom;t<window.innerHeight/1&&n>window.innerHeight/1&&(e.classList.contains("blue-section")?gsap.to(".fa-circle-chevron-left",{color:"white"}):e.classList.contains("white-section")&&gsap.to(".fa-circle-chevron-left",{color:"#01044e"}),e.classList.contains("anim-text")&&(text_anim||(text_anim=!0,setTimeout((()=>{animateText()}),3e3))))}))}function toggleAnswer(e){var t=document.getElementById(e);"none"===t.style.display||""===t.style.display?t.style.display="block":t.style.display="none"}function letrinhaBonitinhaAnimada(){const e=document.getElementById("animated-text"),t=e.innerText.split("");e.innerHTML="",t.forEach(((t,n)=>{const o=document.createElement("span");o.innerHTML=" "===t?"&nbsp;":t,o.style.color="white",e.appendChild(o),setTimeout((()=>{o.style.color="var(--base7)"}),50*n)}))}window.addEventListener("scroll",checkSection),document.querySelector(".wapp").addEventListener("click",(()=>{document.querySelector(".pop").style.display="flex"})),setTimeout((()=>{gsap.to(".wapp",{x:0})}),3e3),setTimeout((()=>{letrinhaBonitinhaAnimada()}),1e3);const step1=document.querySelector(".step-1"),step2=document.querySelector(".step-2"),step3=document.querySelector(".step-3"),bar1=document.querySelector(".bar-1"),bar2=document.querySelector(".bar-2"),num=document.querySelector(".numPas"),textTitle=document.querySelector(".text-title"),textDescri=document.querySelector(".text-descri"),dedinhoMagico=document.querySelector(".fa-hand-pointer");let startX;const swipeArea=document.querySelector(".pas");let currentStep=1;function setActiveStep(e){const t=[bar1,bar2];switch([step1,step2,step3].forEach(((t,n)=>{t.style.borderColor=n<e?"#02033e":"#474750"})),t.forEach(((t,n)=>{t.style.backgroundColor=n<e-1?"#02033e":"#474750"})),e){case 1:setdata(1,"Reunião de alinhamento","Atendimento personalizado, para entendermos melhor sobre seu projeto e oferecermos a melhor solução.");break;case 2:setdata(2,"Envio de documentação","Recebimento de toda a documentação de forma digital. Você não precisa sair do conforto de sua casa."),dedinhoMagico.style.display="none";break;case 3:setdata(3,"Sonho realizado!","Oba! Seu CNPJ saiu e sua empresa já tá pronta pra te receber e te acompanhar nessa jornada.");break}currentStep=e}function setdata(e,t,n){num.textContent=e,textTitle.textContent=t,textDescri.textContent=n}function handleSwipe(e,t){const n=t-e;Math.abs(n)>70&&(n>0?currentStep>1&&setActiveStep(currentStep-1):currentStep<3&&setActiveStep(currentStep+1))}function debounce(e,t){let n;return o=>{clearTimeout(n),n=setTimeout((t=>{n=null,e.apply(this,arguments)}),t)}}function ajustBtns(){const e=document.querySelectorAll(".btn_white"),t=document.querySelector(".passos-abrir-empresa-desktop");getComputedStyle(t).display;e.forEach((e=>{e.parentElement.href="header",document.querySelector(".lay_form").style.display="flex"}))}setActiveStep(1),step1.addEventListener("click",(()=>setActiveStep(1))),step2.addEventListener("click",(()=>setActiveStep(2))),step3.addEventListener("click",(()=>setActiveStep(3))),swipeArea.addEventListener("touchstart",(e=>{const t=e.touches[0];startX=t.clientX})),swipeArea.addEventListener("touchend",(e=>{const t=e.changedTouches[0].clientX;handleSwipe(startX,t)}));const debouncedAjustBtns=debounce(ajustBtns,250);window.addEventListener("resize",debouncedAjustBtns),ajustBtns();for(var e=document.getElementsByClassName("accordion-item"),t=0;t<e.length;t++)e[t].querySelector(".accordion-header").addEventListener("click",n);function n(e){this.parentNode.classList.toggle("expanded"),"rotate(180deg)"==this.parentNode.querySelector(".accordion-icon").style.webkitTransform?this.parentNode.querySelector(".accordion-icon").style.transform="rotate(0deg)":this.parentNode.querySelector(".accordion-icon").style.transform="rotate(180deg)"}const cardServ1=document.querySelectorAll(".csv1"),cardServ2=document.querySelectorAll(".csv2");document.querySelector("._578").addEventListener("mouseenter",(()=>{cardServ1.forEach((e=>{e.classList.add("card-serv-open")})),cardServ2.forEach((e=>{e.classList.remove("card-serv-open")}))})),document.querySelector("._579").addEventListener("mouseenter",(()=>{cardServ2.forEach((e=>{e.classList.add("card-serv-open")})),cardServ1.forEach((e=>{e.classList.remove("card-serv-open")}))}));const texts=["Abertura de empresa simples e rápido!","Transforme sua ideia em realidade"];let currentTextIndex=0;const element=document.getElementById("animatedText");let index=0;function animateText(){eraseText((()=>{writeText((()=>{setTimeout((()=>{currentTextIndex=1-currentTextIndex,animateText()}),5e3)}))}))}function eraseText(e){index>=0?(element.textContent=texts[currentTextIndex].slice(0,index),index--,setTimeout((()=>eraseText(e)),50)):(index=0,e())}function writeText(e){index<texts[1-currentTextIndex].length?(element.textContent+=texts[1-currentTextIndex].charAt(index),index++,setTimeout((()=>writeText(e)),50)):e()}document.querySelector(".wapp").addEventListener("click",(()=>{document.querySelector(".pop").style.visibility="visible"})),document.querySelector(".fa-times").addEventListener("click",(()=>{document.querySelector(".pop").style.visibility="hidden"})),document.querySelector(".country-image").src="https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/br.svg",document.getElementById("countrySelect").addEventListener("change",(function(){var e=document.getElementById("countrySelect"),t=e.options[e.selectedIndex].dataset.code;t&&(document.querySelector(".code").textContent=t),document.querySelector(".country-image").src="https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/"+this.value+".svg"}));const telef=document.querySelectorAll(".telf");function cbOrbt(){window.location.assign("./successful")}function mostrarNotificacaoDeCookie(){if(!document.cookie.split("; ").find((e=>e.startsWith("cookieAceito=true")))){const e=document.createElement("div");e.classList.add("cookie-notification"),e.innerHTML='\n        Utilizamos apenas cookies essenciais para melhorar sua experiência e garantir o bom funcionamento deste site. Ao prosseguir, você concorda com o uso de cookies.\n        <button id="aceitarCookies">Aceitar</button>\n      ',document.body.appendChild(e),e.style.display="block",document.getElementById("aceitarCookies").addEventListener("click",(function(){document.cookie="cookieAceito=true; max-age=31536000; path=/",e.style.display="none"}))}}telef.forEach((e=>{e.addEventListener("input",(function(){const e=function(e){return e.length<=10?e.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3")}(this.value.replace(/\D/g,""));this.value=e}))})),mostrarNotificacaoDeCookie();