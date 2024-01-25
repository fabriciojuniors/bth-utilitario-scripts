
export function getParametros(parametros:string[]) {
    const parametrosFormatado: any = {};

    parametros.forEach(p => {
        const parametro = p.split('=');
        parametrosFormatado[parametro[0]] = normalizeParametros(parametro[1]);
    });

    return parametrosFormatado

}

function normalizeParametros(parametro: string) {

    if(parametro.startsWith('[') && parametro.endsWith(']')) {
        return parametro.replace('[', '').replace(']', '').split(',');
    }

    return parametro;

}