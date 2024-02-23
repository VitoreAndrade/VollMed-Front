import axios from "axios";
import type Login from "../interface/Login";

// export async function logarUsuario():Promise<Login>{
//     const resposta = await axios.post<Login>('http://localhost:8080/login');
//     return resposta.data as Login
// }

export async function logarUsuario(login:Login): Promise<Login> {
    const resposta = await axios.post<Login>('http://localhost:8080/login',login);
    return resposta.data as Login;
}