/*var resposta = confirm("Deseja excluir?");
console.log(resposta);
*/

const a = 10;
const b = 33;
function soma(a,b){
    return a+b;
}
document.querySelector("#calcular").addEventListener("click",function(){
    let ValorA = document.querySelector("#valorA").value;
    let ValorB = document.querySelector("#valorB").value;
    alert(soma(parseInt(ValorA),parseInt(ValorB)));
});