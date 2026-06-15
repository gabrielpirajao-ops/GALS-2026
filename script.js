/* ========================= */
/* GALS - SISTEMA PRINCIPAL */
/* ========================= */

/* ELEMENTOS */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

/* ========================= */
/* FILTRO DO CATÁLOGO */
/* ========================= */

filters.forEach(btn => {

btn.addEventListener("click", () => {

filters.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const type = btn.getAttribute("data-filter");

products.forEach(product => {

const productType = product.getAttribute("data-type");

if(type === "all" || type === productType){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

});

/* ========================= */
/* MODAL DE PRODUTOS */
/* ========================= */

const productData = {

usinagem: {
title: "Usinagem CNC",
text: "Processo de fabricação de peças com alta precisão utilizando máquinas CNC modernas."
},

fundicao: {
title: "Fundição Técnica",
text: "Produção de peças metálicas através de moldes e derretimento de ligas metálicas."
},

laser: {
title: "Corte a Laser",
text: "Cortes industriais com alta precisão em aço, alumínio e outros materiais."
},

moldes: {
title: "Moldes Industriais",
text: "Desenvolvimento de moldes personalizados para produção em escala industrial."
}

};

/* ABRIR MODAL */

document.querySelectorAll(".open").forEach(btn => {

btn.addEventListener("click", (e) => {

const card = e.target.closest(".product");
const type = card.getAttribute("data-type");

modalTitle.textContent = productData[type].title;
modalText.textContent = productData[type].text;

modal.style.display = "flex";

});

});

/* FECHAR MODAL */

closeModal.addEventListener("click", () => {
modal.style.display = "none";
});

window.addEventListener("click", (e) => {
if(e.target === modal){
modal.style.display = "none";
}
});

/* ========================= */
/* ANIMAÇÃO DE ENTRADA */
/* ========================= */

const elements = document.querySelectorAll(".card, .product, .info-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

}, { threshold: 0.1 });

elements.forEach(el => {

el.style.opacity = 0;
el.style.transform = "translateY(20px)";
el.style.transition = "0.6s ease";

observer.observe(el);

});

/* ========================= */
/* LOG */
/* ========================= */

console.log("GALS site carregado com sucesso 🚀");

/* ========================= */
/* ORÇAMENTO (SIMULAÇÃO) */
/* ========================= */

const form = document.querySelector(".form");
const formInputs = document.querySelectorAll(".form input, .form select, .form textarea");

if(form){

form.addEventListener("submit", (e) => {
e.preventDefault();

let valid = true;

formInputs.forEach(input => {
if(input.value.trim() === ""){
valid = false;
input.style.border = "1px solid #ef4444";
}else{
input.style.border = "1px solid rgba(255,255,255,.1)";
}
});

if(valid){

alert("Orçamento enviado com sucesso! Nossa equipe entrará em contato.");

formInputs.forEach(input => input.value = "");

}else{

alert("Preencha todos os campos!");

}

});

}

/* ========================= */
/* MENU ATIVO AO SCROLL */
/* ========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 150){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

/* ========================= */
/* SCROLL SUAVE APRIMORADO */
/* ========================= */

navLinks.forEach(link => {

link.addEventListener("click", (e) => {

e.preventDefault();

const target = document.querySelector(link.getAttribute("href"));

if(target){

window.scrollTo({
top: target.offsetTop - 80,
behavior: "smooth"
});

}

});

});

/* ========================= */
/* EFEITO HOVER GLOBAL */
/* ========================= */

const buttons = document.querySelectorAll("button, .btn");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {
btn.style.transform = "scale(1.03)";
btn.style.transition = "0.2s";
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "scale(1)";
});

});

/* ========================= */
/* ANIMAÇÃO FINAL DE ENTRADA */
/* ========================= */

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

/* ========================= */
/* PERFORMANCE VISUAL */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

document.body.style.transition = "0.5s ease";
document.body.style.opacity = "1";

});

/* ========================= */
/* FINAL LOG */
/* ========================= */

console.log("GALS Tech Premium totalmente carregado 🚀");
