class Pessoa {
  id;
  nomeCompleto;
  endereco;
  email;
  telefone;
  nomeAnimalzinho;
  tipoAnimal;

  constructor(
    id,
    nomeCompleto,
    endereco,
    email,
    telefone,
    nomeAnimalzinho,
    tipoAnimal
  ) {
      this.id = 1;
      this.nomeCompleto = nomeCompleto;
      this.endereco = endereco;
      this.email = email;
      this.telefone = telefone;
      this.nomeAnimalzinho = nomeAnimalzinho;
      this.tipoAnimal = tipoAnimal;
 
      this.arrayPessoas = [];
      this.editID = null;
  }

  salvar() {
    let pessoa = this.lerDados();

    if (this.validaCampos(pessoa)) {
      if (this.editID == null) {
        this.adicionar(pessoa);
      } else {
        this.atualizar(this.editID, pessoa);
      }
    }

    this.listaTabela();
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayPessoas.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_nomeCompleto = tr.insertCell();
      let td_endereco = tr.insertCell();
      let td_email = tr.insertCell();
      let td_telefone = tr.insertCell();
      let td_nomeAnimalzinho = tr.insertCell();
      let td_tipoAnimal = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayPessoas[i].id;
      td_nomeCompleto.innerText = this.arrayPessoas[i].nomeCompletoTutor;
      td_endereco.innerText = this.arrayPessoas[i].endereco;
      td_email.innerText = this.arrayPessoas[i].email;
      td_telefone.innerText = this.arrayPessoas[i].telefone;
      td_nomeAnimalzinho.innerText = this.arrayPessoas[i].nomeAnimalzinho;
      td_tipoAnimal.innerText = this.arrayPessoas[i].tipoAnimal;

      td_id.classList.add("center");

      let spanEdit = document.createElement("span");
      spanEdit.innerText = "🖊️";
      spanEdit.setAttribute(
        "onclick",
        "pessoa.preparaEdicao(" + JSON.stringify(this.arrayPessoas[i]) + ")"
      );

      let spanDelete = document.createElement("span");
      spanDelete.innerText = "❌";
      spanDelete.setAttribute(
        "onclick",
        "pessoa.deletar(" + this.arrayPessoas[i].id + ")"
      );

      td_acoes.appendChild(spanEdit);
      td_acoes.appendChild(spanDelete);
    }
  }

  adicionar(pessoa) {
    this.arrayPessoas.push(pessoa);
    this.id++;
  }

  atualizar(id, pessoa) {
    for (let i = 0; i < this.arrayPessoas.length; i++) {
      if (this.arrayPessoas[i].id == id) {
        this.arrayPessoas[i].nomeCompletoTutor = pessoa.nomeCompletoTutor;
        this.arrayPessoas[i].endereco = pessoa.endereco;
        this.arrayPessoas[i].email = pessoa.email;
        this.arrayPessoas[i].telefone = pessoa.telefone;
        this.arrayPessoas[i].nomeAnimalzinho = pessoa.nomeAnimalzinho;
        this.arrayPessoas[i].tipoAnimal = pessoa.tipoAnimal;
      }
    }
  }

  preparaEdicao(dados) {
    this.editID = dados.id;

    document.getElementById("nomeCompleto").value = dados.nomeCompletoTutor;
    document.getElementById("endereco").value = dados.endereco;
    document.getElementById("email").value = dados.email;
    document.getElementById("telefone").value = dados.telefone;
    document.getElementById("nomeAnimalzinho").value = dados.nomeAnimalzinho;
    document.getElementById("tipoAnimal").value = dados.tipoAnimal;

    document.getElementById("btnAtualizar").innerText = "Atualizar";
  }

  lerDados() {
    let pessoa = {};

    pessoa.id = this.id;
    pessoa.nomeCompletoTutor = document.getElementById("nomeCompleto").value;
    pessoa.endereco = document.getElementById("endereco").value;
    pessoa.email = document.getElementById("email").value;
    pessoa.telefone = document.getElementById("telefone").value;
    pessoa.nomeAnimalzinho = document.getElementById("nomeAnimalzinho").value;
    pessoa.tipoAnimal = document.getElementById("tipoAnimal").value;

    return pessoa;
  }

  validaCampos(pessoa) {
    let mensagem = "";

    if (pessoa.nomeCompletoTutor == "") {
      mensagem += " - Informe o Nome Completo do Produto \n ";
    }
    if (pessoa.endereco == "") {
      mensagem += "- Informe o seu Endereco Completo \n ";
    }
    if (pessoa.email == "") {
      mensagem += "- Informe seu Email \n ";
    }
    if (pessoa.telefone == "") {
      mensagem += "- Informe seu Telefone \n ";
    }
    if (pessoa.nomeAnimalzinho == "") {
      mensagem += "- Informe o nome do seu Pet \n ";
    }
    if (pessoa.tipoAnimal == "") {
      mensagem += "- Informe o tipo de Animal \n ";
    }
    if (mensagem != "") {
      alert(mensagem);
      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nomeAnimalzinho").value = "";
    document.getElementById("tipoAnimal").value = "";

    document.getElementById("btnAtualizar").innerHTML = "Salvar";
    this.editID = null;
  }

  deletar(id) {
    if (confirm("Você deseja realmente excluir o ID" + id)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.arrayPessoas.length; i++) {
        if (this.arrayPessoas[i].id == id) {
          this.arrayPessoas.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}

let pessoa = new Pessoa();


// module.exports = { Pessoa }