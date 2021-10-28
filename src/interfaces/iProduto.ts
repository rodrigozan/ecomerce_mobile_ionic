export interface iProduto {
    id: string,
    nome: string,
    descricao: string,
    categorias: [string],
    avaliacoes: [string],
    dataInsercao: Date,
    ean: string,
    estoque: number,
    imagem: string,
    industria: string,
    lancamento: boolean,
    marca: string,
    precoDe: number,
    precoPor: number,
    promocao: boolean
}