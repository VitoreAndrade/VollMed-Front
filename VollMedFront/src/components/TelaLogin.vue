<template>
    <header class="apresentacao-primaria">
        <h1 class="titulo-principal">
            VollMed cuidando de você!
        </h1>
        <img src="../assets/logo-vol-med.png" class="logo-primaria">
    </header>
    <h2 class="texto-secundario">
        Aqui você encontra os serviços digitais VollMed.
    </h2>

    <div class="cadastrar-login">
        <form @submit.prevent="logar" class="campos-login">
            <p class="texto-login">
                Faça o seu login!
            </p>
            <InputText id="username" placeholder="usuário" v-model="login.login" class="po" />
            <InputText id="password" placeholder="senha" v-model="login.senha" type="password" class="po" />
            <button type="submit">Enviar</button>
        </form>
        <img src="../assets/logo-vol-med.png" class="logo-primaria">
    </div>
</template>

<script lang="ts">
import InputText from 'primevue/inputtext';
import type Login from '@/interface/Login';
import { logarUsuario } from '@/http';

export default {
    components: {
        InputText
    },
    data() {
        return {
            login: { login: '', senha: '' } as Login
        }
    },
    methods: {
        async logar() {
            const respostaLogin = await logarUsuario(this.login);
                alert('Login realizado com sucesso!')
        
           
        }
    }
}
</script>

<style scoped>
.apresentacao-primaria{
    background-color: #5CB9EE;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.titulo-principal{
    color: white;
}
.logo-primaria{

    width: 20%;
    height: 60%;
}
.texto-secundario{
    text-align: center;
    margin-bottom: 30px;
}
.cadastrar-login{
    height: 20rem;
    margin: 0% 16%;
    /* background: red; */
    display: flex;
    align-items: center;
    gap: 36%;

}
.campos-login{
    flex-direction: column;
    display: flex;
    gap: 10px;
    width: 26%;
    margin: 0 50px;
    
}
.po{
    height: 2rem;
    border-radius: 10px;
    box-shadow: 10px 10px 10px #00598B
}
</style>