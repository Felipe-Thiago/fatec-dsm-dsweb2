const leitor = require('readline-sync');

let regiao:string = leitor.question("Insira uma região do Brasil: ");

switch (regiao){
    case "Norte":
    case "norte":
    case "NORTE":
        console.log("Amazonas (AM) \nPará (PA) \nTocantins (TO) \nAmapá (AP) \nRoraima (RR) \nRondônia (RO) \nAcre (AC)");
        break;
    case "Nordeste":
    case "nordeste":
    case "NORDESTE":
        console.log("Maranhão (MA) \nPiauí (PI) \nCeará (CE) \nRio Grande do Norte (RN) \nPernambuco (PE) " +
        "\nParaíba (PB) \nSergipe (SE) \nAlagoas (AL) \nBahia (BA)")
        break;
    case "Centro-Oeste": case "CENTRO-OESTE": case "centro-oeste": case "Centro-oeste":
    case "Centro Oeste": case "CENTRO OESTE": case "centro oeste": case "Centro oeste":
        console.log("Mato Grosso (MT) \nMato Grosso do Sul (MS) \nGoiás (GO) \nDistrito Federal (DF)")
        break;
    case "Sudeste":
    case "SUDESTE":
    case "sudeste":
        console.log("Minas Gerais (MG) \nSão Paulo (SP) \nRio de Janeiro (RJ) \nEspírito Santo (ES)")
        break;
    case "Sul":
    case "SUL":
    case "sul":
        console.log("Paraná (PR) \nRio Grande do Sul (RS) \nSanta Catarina (SC)")
        break;
    default:
        console.log("Região Inexistente");
}

