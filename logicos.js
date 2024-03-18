const nome = window.prompt("Qual seu nome: ")
const peso = parseFloat(window.prompt("Qual seu peso: "))
const altura = parseFloat(window.prompt("Qual sua altura: "))
const IMC = peso / (altura**2)
if(IMC < 18.5){
    alert(nome+ " você é abaixo do peso");
}else if(IMC >= 18.5 && IMC <= 24.9){
    alert(nome+" Seu peso é normal")
}else if(IMC >= 25.0 && IMC <= 29.9){
    alert(nome+" vocÊ está com Sobrepeso")
}
else if(IMC >= 30.0 && IMC <= 34.9){
    alert(nome+" você está com Obesidade grau 1")
}else if(IMC >= 35.0 && IMC <= 39.9){
    alert(nome+" VocÊ está com obesidade grau 2")
}else if(IMC >= 40.0){
    alert(nome+" você está com Obesidade grau 3")
}