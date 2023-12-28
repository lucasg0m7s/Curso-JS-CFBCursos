//querySelector() é mais dinâmico, ou seja, ele pode obter um elemento a partir de uma classe, tag ou id. Porém, ele retorna apenas um elemento, o primeiro que encontrar
// O querySelectorAll() faz a mesma coisa que o querySelector(), porém ele retorna uma coleção do tipo NodeList com todos os elementos encontrados

const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

// Obtendo todos os elementos div que tem o atributo class
// const query_divTodas = [...document.querySelectorAll("div[class]")] 

// Obtendo todos os elementos div
// const query_divTodas = [...document.querySelectorAll("div")] 

// Obtendo todos os elementos p que estão dentro de div
const query_divTodas = [...document.querySelectorAll("div > p")] 

// Obtendo todos os elementos com a classe cursos, para isso colocamos um '.' antes do nome da classe
const query_cursosTodos = [...document.querySelectorAll(".curso")] 
const query_cursosC1 = [...document.querySelectorAll(".c1,p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]

// Obtendo um elemento através do id, para isso colocamos uma '#' antes do nome do id
const query_cursoEspecial = document.querySelector("#c1")
// ou
const query_cursoEspecialAll = document.querySelectorAll("#c1")[0]

console.log(query_divTodas)








