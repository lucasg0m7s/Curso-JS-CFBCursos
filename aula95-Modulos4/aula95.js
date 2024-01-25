import getTodosCursos from "./cursos4.js";
// import {cursos as c, getCurso as gc} from "./cursos4.js";
import * as m_cursos from './cursos4.js' // Obter todos os exportados

console.log(m_cursos.cursos);
console.log(m_cursos.getCurso(1));
console.log(m_cursos.default());

