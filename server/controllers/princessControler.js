//responsável por fazer controle e chamada de funções para manipular o dado para o front.

import { getData, insertData } from "../models/princess.js";

export async function findAllPrincess() {
    const dataCurrent = await getData();
    console.log(dataCurrent);
    return dataCurrent;
}