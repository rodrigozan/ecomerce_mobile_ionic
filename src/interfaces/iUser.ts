export interface iUser {
    id: string,
    nomeCompleto: string,
    email: string,
    senha: string,
    dataNasc: Date,
    sexo: string,
    escolaridade: string,
    profissao: string,
    renda: number,
    enderecoPrincipal: {
        rua: string,
        numero: number,
        bairro: string,
        cidade: string,
        uf: string,
        celular: number
    },
    endereco: [
        {
        rua: string,
        numero: number,
        bairro: string,
        cidade: string,
        uf: string,
        celular: number
        }
    ],
}