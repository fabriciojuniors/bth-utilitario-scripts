import { comparar } from "./comparacao";
import { buscaExecucoes } from "./execucoes";
import { ordenar } from "./ordernar";
import { getParametros } from "./utils/parametros";

const parametros = getParametros(process.argv.slice(2));

switch((parametros.acao ?? '').toUpperCase()) {
    case 'EXECUCOES':
        buscaExecucoes(parametros.protocolos, parametros.agrupador);  
        break; 
    case 'COMPARACAO':
        comparar(parametros.caminhoOriginal, parametros.caminhoModificado)
        break;
    case 'ORDENACAO':
        ordenar(parametros.caminho, parametros.ordenarPor);
        break;
    default:
        console.warn(`Opção ${parametros.opcao} é inválida!`);
        break;
}
