//Pedido na lição: crie uma classe chamada SomadorDeNotas.
class SomadordeNotas{
    constructor(){
        
        //Pedido na lição: adicione um atributo total inicializado com 0 para armazenar a soma das notas.
        this.total = 0;
    }

    //Pedido na lição: adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
    adicionarNota(nota){

        //Pedido na lição: este método deve receber um parâmetro nota e somá-lo ao atributo total.
        this.total += nota;
    }

    //criação do método verTotal(), que é pedido posteriormente.
    verTotal(){
        console.log(this.total);
    }
}

//Pedido na lição: crie um objeto da classe SomadorDeNotas, chamado somador.
const somador = new SomadordeNotas();

//Pedido na lição: utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.
somador.adicionarNota(8);
somador.adicionarNota(10);
somador.adicionarNota(3);

//Pedido na lição: após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.
somador.verTotal();
