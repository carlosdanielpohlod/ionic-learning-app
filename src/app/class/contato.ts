export class Contato {

    public nome: string
    public telefone: number
    public dataNascimento : string
    public sexo : string
    public id : number
    constructor(nome: string, telefone:number, dataNascimento:string, sexo:string){
        this.nome = nome
        this.telefone = telefone
        this.dataNascimento = dataNascimento.split('T')[0]
        this.sexo = sexo
        
        this.id = new Date().getTime()
    }

    public getNome() : string{
        return this.nome
    }
    public getId() : number{
        return this.id
    }
    public setNome(nome: string):void{
        this.nome = nome
    }

    public setTelefone(telefone : number) : void{
        this.telefone = telefone
    } 

    public getTelefone(){
        return this.telefone
    }


    public getSexo() : string{
        return this.sexo
    }

    public setSexo(sexo: string):void{
        this.sexo = sexo
    }

    public getDataNascimento() : string{
        return this.dataNascimento
    }

    public setDataNascimento(dataNascimento: string):void{
        this.dataNascimento = dataNascimento
    }

}
