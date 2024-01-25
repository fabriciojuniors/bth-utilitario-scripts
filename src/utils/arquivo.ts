import { readFile, writeFile } from 'fs';

export function escrever(dados: any, fileName:string = "dados") {
    const dataHora = new Date();
    const path = `./results/${fileName}-${dataHora.toISOString()}.json`;
    
    let dadosEscrita: any;

    if (dados instanceof Map) {
        dadosEscrita = JSON.stringify(Object.fromEntries(dados), null, 2)
    } else {
        dadosEscrita = JSON.stringify(dados, null, 2);
    }    

    writeFile(path, dadosEscrita, (err) => {
        if (err) {
            console.log(`Erro ao atualizar arquivo: ${err}`);
            return;
        }
    });
}

export function lerJSON(file: string) {
    return new Promise<any>((resolve, reject) => {
        readFile(file, (err, data) => err ? reject(err) : resolve(JSON.parse(data.toString())));
    });
}