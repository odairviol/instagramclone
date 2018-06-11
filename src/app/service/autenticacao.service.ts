import { Usuario } from "../acesso/usuario.model";
import * as firebase from "firebase";

export class AutenticacaoService {

    public cadastrarUsuario(usuario: Usuario): void {
        console.log("chegamos até aqui", usuario);
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) => {

            //Deletando a senha do atributo senha do objeto usuário.
            delete usuario.senha;
            
            //Registrando dados complementares do usuário no path email na base64
            firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario);
        })
        .catch((error: Error) => {
            console.log(error);
        });
    }

    public autenticar(email: string, senha: string): void {
        console.log(email, senha);
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => {
            console.log(resposta);
        })
        .catch((error: Error) => {
            console.log(error);
        });
    }
}