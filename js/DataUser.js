import { Formulario } from "./Formulario.js";
class DataUser {
  constructor() {
    this.dataUser = [];
  }
  cadastrarUsuario(nome, email, comentario, tipobrinquedo, genero, telefone) {
    const cadastrarusuario = new Formulario(
      nome,
      email,
      comentario,
      tipobrinquedo,
      genero,
      telefone
    );
    this.dataUser.push(cadastrarusuario);
  }
}
export { DataUser };
