const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Rapspberry", "C++", "Python", "C#"]

// const getTodosCursos = ()=>{
//     return cursos
// }

// Apenas um export default
export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

// export default getTodosCursos

export {cursos, getCurso}
