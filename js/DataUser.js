import { Formulario } from "./Formulario.js";
class DataUser {
  constructor() {
    this.dataUser = [];
  }
  cadastrarUsuario(nome, email, comentario, tipobrinquedo, genero, telefone) {
    const cadastrarUsuario = new Formulario(
      nome,
      email,
      comentario,
      tipobrinquedo,
      genero,
      telefone
    );
    this.dataUser.push(cadastrarUsuario);
  }
}
export { DataUser };
