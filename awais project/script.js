let pencilclick=document.querySelector("#pencil");
let menu=document.querySelector(".menu");
let cross=document.querySelector("#cross");
pencilclick.addEventListener("click",()=>{
    if (menu.style.display === "none"){
        menu.style.display = "block"; 
    }
     else {
        menu.style.display = "none";
    }
});
cross.addEventListener("click",()=>{
    menu.style.display="none";
});
let ordernow1 = document.querySelector("#ordernow1");
let ordernow2=document.querySelector("#mealordernow");
let ordernow3=document.querySelector("#mealordernow2");
ordernow1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
});
ordernow2.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
});
ordernow3.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
});
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let send=document.querySelector("#send");
let select=document.querySelector("#select");
let comm=document.querySelector("#comm");
let submit=document.querySelector("#submit");
send.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
    select.style.display="none";
    comm.innerText="Give Review";
});
let how=document.querySelector("#how");
how.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let ab=document.querySelector("#ab");
ab.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let why=document.querySelector("#why");
why.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let de=document.querySelector("#de");
de.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
    select.style.display="none";
});
let ba=document.querySelector("#ba");
ba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
    select.style.display="none";
});
let ve=document.querySelector("#ve");
ve.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    menu.style.display="block";
    select.style.display="none";
});
submit.addEventListener( "click",()=>{
  alert("Your Order Is Placed");
})
let menubar=document.querySelector("#menubar");
let menuBar=document.querySelector(".menu-bar");
let menupro=document.querySelector("#menu-pro");
let menucli=document.querySelector("#menu-cli");
let menuabb=document.querySelector("#menu-abb");
let backarrow=document.querySelector("#backarrow");
let navbar=document.querySelector(".navbar");
menubar.addEventListener("click",()=>{
        menuBar.style.display="block";
        menupro.style.display="block";
        menucli.style.display="block";
        menuabb.style.display="block";
        menubar.style.display="none";
        backarrow.style.display="block";
        navbar.style.position="fixed";

});
backarrow.addEventListener("click",()=>{
    menuBar.style.display="block";
    menupro.style.display="none";
    menucli.style.display="none";
    menuabb.style.display="none";
    menubar.style.display="block";
    backarrow.style.display="none";
    navbar.style.position="fixed";

});
