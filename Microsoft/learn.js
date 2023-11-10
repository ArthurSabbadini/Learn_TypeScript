/*Tipos primitivos*/
var contra;
(function (contra) {
    contra[contra["permanente"] = 0] = "permanente";
    contra[contra["temporario"] = 1] = "temporario";
    contra[contra["aprendiz"] = 2] = "aprendiz";
})(contra || (contra = {}));
var func = contra.temporario;
console.log(func);
var retorno = contra.permanente;
console.log(retorno);
var retornoMatriz = [0];
console.log(retornoMatriz);
