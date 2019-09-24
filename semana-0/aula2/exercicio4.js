// EXERCÍCIO 4

// Primeira forma de se fazer:
function exemplo1(){

    const salarioMinimo = 998.00;
   
    const custoQuilowatt = salarioMinimo / 5;
   
    console.log("O valor de cada quilowatt é: R$" + custoQuilowatt);
   
    const quilowattsConsumido = 10;
   
    const valorASerPago = quilowattsConsumido * custoQuilowatt;
    console.log("O valor a ser pago por essa residência é: R$" + valorASerPago);
   
    const desconto = (valorASerPago * 85) / 100 ;
    console.log("O valor a ser pago com desconto é: R$" + desconto)
   }
   
   // Segunda forma de se fazer:
   function exemplo2(){
   
    const salarioMinimo = 998.00;
   
    const custoQuilowatt = salarioMinimo / 5;
   
    console.log("O valor de cada quilowatt é: R$" + custoQuilowatt);
   
    const quilowattsConsumido = 10;
   
    const valorASerPago = quilowattsConsumido * custoQuilowatt;
    console.log("O valor a ser pago por essa residência é: R$" + valorASerPago);
   
    const desconto = (valorASerPago * 15) / 100 ;
   
    const valorASerPagoDesconto = valorASerPago - desconto;
    console.log("O valor a ser pago com desconto é: R$" + valorASerPagoDesconto)
   }
   
   exemplo1()
   