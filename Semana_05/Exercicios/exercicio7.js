
//Pedido na lição: Crie uma classe chamada Animal.
class Animal{

    //o constructor pega os parâmetro nome e idade e os relaciona aos atributos nome e idade
    constructor(nome, idade){
        //Pedido na lição: adicione dois atributos: nome e idade.
        this.nome = nome;
        this.idade = idade;
    }

    //Pedido na lição: adicione um método chamado descrever() na classe Animal.
    descrever(){
        //Pedido na lição: aste método deve exibir no console uma descrição do animal com seu nome e idade.
        console.log(`O animal tem ${this.idade} anos e se chama ${this.nome}`)
    }
}

//Pedido na lição: crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
//Criei os objetos chamados cachorro e gato, mas com os nomes armazenados no parâmetro como "puppy" e "marry".
const cachorro = new Animal("puppy", 16);
const gato = new Animal("marry", 8);

//Pedido na lição: para cada animal, chame o método descrever() para ver a descrição no console.
cachorro.descrever();
gato.descrever();
