export interface Execucao {
    id: string
    idSistema: number
    nomeSistema: string
    idDatabase: number
    idEntidade: number
    nomeEntidade: string
    protocolo: string
    artefatoOrigem: ArtefatoOrigem
    agendamento: any
    autor: string
    status: Status
    descricaoStatus: any
    ultimaMovimentacaoEm: string
    parametros: Parametro[]
    metadados: any[]
    propriedadesInternas: PropriedadesInternas
    propriedades: Propriedades
    execucaoSistemica: boolean
    reclassificacao: boolean
    visibilidade: Visibilidade
    movimentacoesStatus: MovimentacoesStatu[]
    eventos: Evento[]
    iniciadaEm: string
    worker: Worker
    duracao: Duracao2
    mensagemConclusao: string
    tipoConclusao: TipoConclusao
    concluidaEm: string
    gerouLog: boolean
    gerouResultado: boolean
    temParametro: boolean
    transactionId: any
    artefato: Artefato
    concluida: boolean
    ultimoHeartBeat: string
}

export interface ArtefatoOrigem {
    id: string
    versao: number
    idExecutavel: string
    tipo: Tipo
    emModoRascunho: boolean
}

export interface Tipo {
    value: string
    description: string
}

export interface Status {
    value: string
    description: string
}

export interface Parametro {
    id: string
    nome: string
    valor: string
    arquivo: any
}

export interface PropriedadesInternas {
    enviarEmailAoFinalizar: string
}

export interface Propriedades {
    monitoramentoTempoReal: string
    parametrosMarcadores: string
    encadeamento: string
    contextoAlvo: string
}

export interface Visibilidade {
    value: string
    description: string
}

export interface MovimentacoesStatu {
    status: Status2
    iniciadoEm: string
    duracao?: Duracao
    concluida: boolean
}

export interface Status2 {
    value: string
    description: string
}

export interface Duracao {
    valor: number
    unidade: string
}

export interface Evento {
    tipo: string
    descricao: string
    realizadoEm: string
    propriedades?: Propriedade[]
}

export interface Propriedade {
    chave: string
    valor: string
}

export interface Worker {
    grupo: string
    hostName: string
    podName: string
}

export interface Duracao2 {
    valor: number
    unidade: string
}

export interface TipoConclusao {
    value: string
    description: string
}

export interface Artefato {
    idEntidade: number
    idSistema: number
    idArtefato: string
    titulo: string
    tipo: Tipo2
    disponivel: string
    chaveNatureza: string
    disponivelConsulta: boolean
}

export interface Tipo2 {
    value: string
    description: string
}