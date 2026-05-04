//Selecionando elementos
const ano = document.getElementById("ano");

//Preenchendo ano atual
ano.textContent = new Date().getFullYear();

//Tirar links internaos da url durante scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});