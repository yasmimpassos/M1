//Pedido na lição: crie uma classe chamada Animal.
class Animal{

    //o constructor pega os parâmetro nome e idade e os relaciona aos atributos nome e idade
    constructor(nome, idade){

        //Pedido na lição: adicione dois atributos: nome e idade.
        this.nome = nome;
        this.idade = idade;
    }

    //Pedido na lição: adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.
    descrever(){
        console.log(`O animal tem ${this.idade} anos e se chama ${this.nome}`)
    }
}

//Pedido na lição: crie uma classe chamada Gato que herda da classe Animal.
class Gato extends Animal{

    //O constructor pega os parâmetro nome, idade e cor e os relaciona aos respectivos atributos
    constructor(nome, idade, cor){
        //O super pega os dados do constructor da classe mãe
        super(nome, idade)

        //Pedido na lição: adicione um atributo extra cor específico para gatos.
        this.cor = cor;
    }

    //Pedido na lição: adicione um método miar() que exiba no console o som que um gato faz.
    miar(){
        console.log("Miauuuu 🐈")
    }

    //Foi modificado o método descrever, para inserir o parâmetro de cor na descrição.
    descrever(){
        console.log(`O animal tem ${this.idade} anos, se chama ${this.nome} e é ${this.cor}`)
    }
}

//Pedido na lição: crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
//Pedido na lição: para o gato, também defina a cor.
//O gato foi criado como um objeto da classe gato, poís não conseguiriamos chamar o método miar(), se ele fosse um objeto da classe animal.
const cachorro = new Animal("preta", 8);
const gato = new Gato("puppy", 10, "laranja");

//Pedido na lição: para cada animal, chame o método descrever() para ver a descrição no console.
cachorro.descrever()
gato.descrever()

//Pedido na lição: para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).
gato.miar()