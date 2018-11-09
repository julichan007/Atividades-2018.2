declare function require(msg: string) : any;
var readline = require('readline-sync');

import {Usuario} from './Usuario';
import {Chat} from './Chat';
import {Mensagem} from './Mensagem';

export class Controlador{
    private usuarios : Array<Usuario>;
    private chats : Array<Chat>;

    public constructor(usuarios: Array<Usuario> = [], chats: Array<Chat> = []){
        this.usuarios = usuarios;
        this.chats = chats;
    }
    public getUsuarios() : Usuario[]{
        return this.usuarios;
    }
    public setUsuarios(usuarios: Usuario[]) : void{
        this.usuarios = usuarios;
    }
    public getChats() : Array<Chat>{
        return this.chats;
    }
    public setChats(chats : Array<Chat>){
        this.chats = chats;
    }
    public buscarUsuario(nome : string) : Usuario | undefined{
        for (let i of this.usuarios) {
            if (i.getNome() == nome){
                return i;
            }
        }
        return undefined;
    
    }
    public addUsuario(nome: string) : boolean{
        if (this.buscarUsuario(nome) != undefined){
            return false;
        }
        else if(this.usuarios.push(new Usuario(nome))){
                   //add Usuarios
            return true;
        }
                         
    }  
    public buscarGrupos(nome: string) : Chat | undefined{
        for (let i of this.chats){
            if (i.getNome() == nome){
                return i;
            }
            return undefined;
        }
    }
    public addGrupo(nome: string) : boolean{
        if(this.buscarGrupos(nome) != undefined){
            return false;
        }
        else {
            this.chats.push(new Chat(nome));
            return true;
        }
    

    }
    public addUserGrupo(adm: string,pessoa: string, nomeGrupo : string): number{
        let a : Usuario = this.buscarUsuario(adm);
        let p : Usuario = this.buscarUsuario(pessoa);
        let g : Chat = this.buscarGrupos(nomeGrupo);
        if (a != undefined){
            return 1; // adm não existe
        }
        else if(p == undefined){
            return 2;// pessoa nao existe
        }
        else if(g == undefined){
            return 3; //grupo nao existe
        }
        else if(g.buscarUsuario(pessoa) != undefined){
            return 4; // pessoa ja existe no grupo
        }
        else if (g.buscarUsuario(adm) == undefined){
            return 5; // adm nao esta no grupo
        }
        else{
            g.getUsuarios().push(p);
            p.getGrupos().push(g);
            return 0; //inserido com sucesso
        }
    } 
    public enviarMensagem(texto: string, pessoa : string, grupo: string) : number{
        let p : Usuario = this.buscarUsuario(pessoa);
        let g: Chat = this.buscarGrupos(grupo);
        if (p == undefined){
            return 1;
        }
        else if (g == undefined){
            return 2;
        }
        else if(g.buscarUsuario(pessoa) == undefined){
            return 3;
        }
        else{
            g.getMensagens().push(new Mensagem(texto,p));
            return 0; // mensagem enviada
        }
    }
    public buscarMensagensNovas(pessoa : string, grupo: string) : Mensagem[]{
        let usuario : Usuario = this.buscarUsuario(pessoa);
        let g: Chat = this.buscarGrupos(grupo);
        let res : Mensagem[] = [];
        if (usuario == undefined){
            console.log("pessoa nao existe")
        }
        else if (g == undefined){
            console.log("grupo nao existe");
        }
        else if(g.buscarUsuario(pessoa) == undefined){
            console.log("pessoa nao esta no grupo");
        }
        else{
            for (let mensagem of g.getMensagens()){
                if(mensagem.buscarLeitores(pessoa) == undefined){
                    res.push(mensagem);
                    mensagem.getLeitores().push(pessoa);
                }
            }
        }
        console.log(res + "!!");
        return res;
    }

    public play() :void{
        while(true) {
            let comandos : string = ""+
            "0 - Adcionar contato\n"+
            "1 - Criar novo grupo\n"+
            "2 - Mostrar usuarios\n"+
            "3 - Mostrar grupos do usuario\n" +
            "4 - Mostrar quem esta no grupo\n"+
            "5 - Adcionar membro no grupo\n"+
            "6 - Mandar mensagem\n"+
            "7 - Ver mensagens novas\n"+
            "sair -  sair do programa\n"
        console.log(comandos);
        let comando : string = readline.question("Digite um comando: ");

        switch(comando){
            case "0":
                let nome : string = readline.question("Digite um nome: ");
                if(this.addUsuario(nome) == true){
                    console.log("Cadastro realizado com sucesso");
                } else{
                    console.log("Contato já existente na agenda");
                }
                break;
            case "1":
            let grupo : string = readline.question("Digite um nome para o novo grupo: ");
                if (this.addGrupo(grupo) == true){
                    console.log("Grupo criado");
                }else{
                    console.log("Grupo já existe");
                }
                break;
            case "2":
                for (let usu of this.usuarios){
                    console.log(usu.getNome());
                }    
                break;
            case "3":
                for(let b of this.chats){
                    console.log(b.getNome());
                }
                break;
            case "4":
                grupo = readline.question("Digite o nome do grupo: ");
                let conversa : Chat| undefined = this.buscarGrupos(grupo);
                if (conversa == undefined){
                    console.log("Grupo nao encontrado");
                }else{
                    console.log(conversa.mostrarUsuario());
                }
                break;
            case "5":
                grupo = readline.question("Digite o nome do grupo: ");
                nome = readline.question("Digite o nome do novo membro: ");
                let adm = readline.question("Digite o seu nome:");
                let criador : string = this.addUserGrupo(adm, nome,grupo);
                console.log(criador);
                break;
            case "6":
                let p : string = readline.question("Pessoa: ");
                let g : string = readline.question("Grupo: ");
                let mens : string = readline.question("Digite a mensagem: ");
                let msg : number = (this,this.enviarMensagem(p,g,mens));
                if(msg == 1){
                    console.log("Pessoa nao encontrada");
                }else if(msg == 2){
                     console.log("Grupo nao encontrado");   
                }else if(msg == 3){
                    console.log("essa pessoa nao esta no grupo");    
                }else{
                    console.log("Mensagem enviada");
                }
                break;
            case "7":
                grupo = readline.question("Digite o nome do grupo: ");
                let pessoa = readline.question("Nome do usuario: ");
                console.log(this.buscarMensagensNovas(pessoa,grupo));
                break;           

        }
        }

    }

}