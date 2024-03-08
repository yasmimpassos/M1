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
