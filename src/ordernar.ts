import { escrever, lerJSON } from "./utils/arquivo";

export async function ordenar(filePath: string, ordenarPor: string) {
    const dados = await lerJSON(filePath) as any[];
    const dadosOrdenados = dados.sort((a, b) => b[ordenarPor] - a[ordenarPor]);
    escrever(dadosOrdenados, "ordenado");
}