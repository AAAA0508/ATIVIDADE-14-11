let quantidade_abates : number = 0; 
let quantidade_assistencias : number = 0;
let quantidade_mortes : number = 0;
let resultado : number = 0;

quantidade_abates = Number(prompt("digite o numero de abates:"));
quantidade_assistencias = Number(prompt("digite o numero de assistencias:"));
quantidade_mortes = Number(prompt("digite o numero de mortes:"));

resultado = (quantidade_abates + quantidade_assistencias) / quantidade_mortes;

console.log(`${resultado}`);