class Pessoa {
    constructor(nome) {
      this._nome = nome;
    }
  
    setNome(nome) {
      this._nome = nome;
    }
  
    getNome() {
      return this._nome;
    }
  }
  
  class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
      super(nome);
      this._cpf = cpf;
    }
  
    setCPF(cpf) {
      this._cpf = cpf;
    }
  
    getCPF() {
      return this._cpf;
    }
  }
  
  class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
      super(nome);
      this._cnpj = cnpj;
    }
  
    setCNPJ(cnpj) {
      this._cnpj = cnpj;
    }
  
    getCNPJ() {
      return this._cnpj;
    }
  }
  
  class Cadastro {
    constructor() {
      this._pessoas = [];
    }
  
    cadastrarPessoa(pessoa) {
      this._pessoas.push(pessoa);
    }
  
    imprimirCadastro() {
      const listaCadastro = document.getElementById("cadastro");
      listaCadastro.innerHTML = "";
  
      this._pessoas.forEach(function(pessoa) {
        const li = document.createElement("li");
        li.textContent = "Nome: " + pessoa.getNome();
        listaCadastro.appendChild(li);
      });
    }
  }
  
  const cadastro = new Cadastro();
  
  function cadastrarPessoa() {
    const nome = document.getElementById("nome").value;
    const pessoa = new Pessoa(nome);
    cadastro.cadastrarPessoa(pessoa);
    cadastro.imprimirCadastro();
    console.log("Nome: "+nome);
  }
  
  function cadastrarPessoaFisica() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const pessoaFisica = new PessoaFisica(nome, cpf);
    cadastro.cadastrarPessoa(pessoaFisica);
    cadastro.imprimirCadastro();
    console.log("Pessoa Fisica\nNome: "+nome);
    console.log("CPF: "+cpf);
  }
  
  function cadastrarPessoaJuridica() {
    const nome = document.getElementById("nome").value;
    const cnpj = document.getElementById("cnpj").value;
    const pessoaJuridica = new PessoaJuridica(nome, cnpj);
    cadastro.cadastrarPessoa(pessoaJuridica);
    cadastro.imprimirCadastro();
    console.log("Pessoa Juridica\nNome: "+nome);
    console.log("CNPJ:"+cnpj);
  }