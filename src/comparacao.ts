import { lerJSON } from "./utils/arquivo";

export async function comparar(caminhoOriginal: string, caminhoModificado: string) {
    const original: any[] = await lerJSON(caminhoOriginal);
    const modificado: any[] = await lerJSON(caminhoOriginal);
    
   
   console.log(original[0] == modificado[0]);
   
    
}