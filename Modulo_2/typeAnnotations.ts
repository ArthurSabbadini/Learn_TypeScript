//Variaveis [type Annotations]

let nome: string = 'Arthur';
console.log(nome);

// Arrays [type Annotations]

let animais: string[] = ['vaca', 'cachorro', 'panda'];
console.log(animais[3]);

let numeros: number[] = [1, 2, 3, 5];
console.log(numeros);

// Objects [type Annotations]

let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'BMW X3', ano: 2023, preco: 100000}
console.log(carro);

// Functions [type Annotations]

function MultiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}

console.log(MultiplicarNumeros(2,5));

function divisão(num1: number, num2: number, num3: number) {
    return num1 / num2 + num3;
}
console.log(divisão(10, 5, 10));