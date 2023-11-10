/*Tipos primitivos*/


enum contra {
    permanente,
    temporario,
    aprendiz,

}

let func: contra = contra.temporario;
console.log(func);


let retorno: contra = contra.permanente;
console.log(retorno);

let retornoMatriz: contra[] = [0];
console.log(retornoMatriz)