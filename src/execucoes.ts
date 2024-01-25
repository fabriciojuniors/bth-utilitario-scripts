import axios from "axios";
import { Execucao, Parametro } from "./types/execucao";
import { escrever } from "./utils/arquivo";

const URL_CONSULTA = "https://plataforma-execucoes-v2.betha.cloud/api/consulta/"

export function buscaExecucoes(protocolos: string[] = [], parametroAgrupador: string | null = null) {

    console.log(`Buscando ${protocolos.length} execuções`);

    let dadosAgrupados = new Map<string, any[]>();
    let dados: any[] = [];

    protocolos.forEach(async (protocolo: string, index) => {
        const response = await axios.get(`${URL_CONSULTA}${protocolo}`);
        const data: Execucao = response.data;
        const parametros: Parametro[] = data.parametros;

        if (!data.gerouResultado) {
            return;
        }

        let exeucacao = {
            protocolo,
            entidade: {
                id: data.idEntidade,
                nome: data.nomeEntidade,
            },
            tempo: (data.duracao.valor / 60000),
            parametros
        }

        if (parametroAgrupador) {
            parametros.forEach((parametro: Parametro) => {
                if (parametro.nome.toUpperCase() == parametroAgrupador.toUpperCase()) {
                    let dado: any = [];
                    if(dadosAgrupados.has(parametro.valor)) {
                        dado = dadosAgrupados.get(parametro.valor);
                    }
                    dado.push(exeucacao);
                    dadosAgrupados.set(parametro.valor, dado);
                }
            });   
        } else {
            dados.push(exeucacao);
        }

        if(index == (protocolos.length - 1)) {
            escrever(parametroAgrupador ? dadosAgrupados : dados);
        }
    });
}