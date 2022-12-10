const { Pessoa } = require("../js/Class/Pessoas");

describe("Class Pessoa", () => {
  const pessoa = new Pessoa();
  // const meuBanco = new Banco()
  test(" Verificar o nome do tutor", () => {
    const nomeCompleto = "Rosa Duarte";
    pessoa.nomeCompleto = "Rosa Duarte";

    expect(pessoa.nomeCompleto).toEqual(nomeCompleto);
  });

  test(" Verificar endereco do Tutor", () => {
    const endereco = "Rua Ipojuca";
    pessoa.endereco = "Rua Ipojuca";

    expect(pessoa.endereco).toEqual(endereco);
  });

  test(" Verificar email do Tutor", () => {
    const email = "rosalyne@gmail.com.br";
    pessoa.email = "rosalyne@gmail.com.br";

    expect(pessoa.email).toEqual(email);
  });

  test(" Verificar telefone do Tutor", () => {
    const telefone = "Rua Ipojuca";
    pessoa.telefone = "Rua Ipojuca";

    expect(pessoa.telefone).toEqual(telefone);
  });

  test(" Verificar o Nome do Animalzinho", () => {
    const nomeAnimalzinho = "Rua Ipojuca";
    pessoa.nomeAnimalzinho = "Rua Ipojuca";

    expect(pessoa.nomeAnimalzinho).toEqual(nomeAnimalzinho);
  });

  test(" Verificar o Tipo do Animalzinho", () => {
    const tipoAnimal = "Gato";
    pessoa.tipoAnimal = "Gato";

    expect(pessoa.tipoAnimal).toEqual(tipoAnimal);
  });



});
