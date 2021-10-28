export interface iCarrinho {
    modalidade: string,
    [itens: number]:{
        produto: string,
        quantidade: number
    }
}