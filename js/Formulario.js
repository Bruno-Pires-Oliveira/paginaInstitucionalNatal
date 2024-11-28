/**
 * Classe que representa um formulário de doação.
 */
class Formulario {
  /**
   * Cria uma nova instância do formulário.
   * @param {string} nome - Nome do doador.
   * @param {string} email - Email do doador.
   * @param {string} comentarios - Comentários adicionais.
   * @param {string} tipobrinquedo - Tipo de brinquedo a ser doado.
   * @param {string} genero - Gênero do doador.
   * @param {string} telefone - Telefone do doador.
   */
  constructor(nome, email, comentarios, tipobrinquedo, genero, telefone) {
    this.nome = nome;
    this.email = email;
    this.comentarios = comentarios;
    this.tipobrinquedo = tipobrinquedo;
    this.genero = genero;
    this.telefone = telefone;
  }
}

export { Formulario };

