# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10. //resposta

d) Imprime os números ímpares de 2 a 10.

- A resposta é a letra c), pois os numeros só são impressos quando divisíveis por 2, logo pares.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota"); //resposta

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

- A resposta é a letra a), pois logo abaixo estamos chamando o método ligar do objeto carro, porém não existe esse objeto ainda e a única opção que cria um objeto chamado carro é a letra a.

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18 //resposta

B) 16

C) 14

D) 12

- A resposta é a letra a), pois inicialmente resultado = 0 e i = 10, depois de rodar uma vez: resultado = 10, i = 8, e vai rodar mais uma vez, ficando: resultado = 18, i = 6, na próxima vez que rodar o código vai parar porque i = 6, assim o resultado permanecendo 18.
______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG) //resposta

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

- A resposta é letra a), pois somente duas opções criam uma classe, a a) e a d), porém na outra alternativa a classe e os métodos são sobre pessoas, e na alternativa a) tem tudo que é pedido no exercício.
______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG)//resposta

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

- A resposta é a letra a), pois é a unica que de fato cria uma classe, as alternativas 2 e 3 são funções e a alternativa 4 é uma variável.
______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria."//resposta

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

- A resposta é a letra a), pois o método greet vai retornar o "Olá, meu nome é (parametro armazenado no atributo this.name)", porém no console log vai imprimer essa mensagem para dois objetos o person1 e o person2, ficando igual ao da alternativa a).
______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```js
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
```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```js
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
```
______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

```js
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
```
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

```js
// Pedido na lição: Considere as seguintes classes:

// Funcionário:
// - atributo: Nome
// - atributo: Idade
// - atributo: Salário base
// - método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.


//criação da classe funcionário
class Funcionario{
    constructor(nome, idade, salarioBase){
        //relaciona os parâmetros recebidos com os atributos pedidos
        this.nome = nome;
        this.idade = idade;

        //considerei que o salario base é o valor da hora aula
        this.salarioBase = salarioBase;
    }

    calcularSalario(){
        //não falaram o que precisava colocar no calcularSalario, então o desenvolvi na classe professor.
    }
}

// Pedido na lição: Professor (herança de Funcionário):
// - atributo: Disciplina
// - atributo: Horas de aula por semana
// - método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

//criação da classe professor que herda de funcionario
class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, disciplina, hrDeAula){
        //relaciona os parâmetros recebidos com os atributos pedidos
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        //considerei a quantidades de horas semanais que recebe
        this.hrDeAula = hrDeAula;
    }

    calcularSalario(){
        //dentro do método relacionei o salariobase com a quantidade de horas semanais e multipliquei por 4 para o salario ser mensal.
        this.salario = this.salarioBase * this.hrDeAula * 4;
        console.log(this.salario);
    }
}

// Pedido na lição: Dois objetos do tipo Professor com informações fictícias.
const bruna = new Professor("Bruna", 25, 150, "design", 44);
const kizzy = new Professor("Kizzy", 26, 155, "programação", 40);


//Pedido na lição: para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.
bruna.calcularSalario();
kizzy.calcularSalario();
```