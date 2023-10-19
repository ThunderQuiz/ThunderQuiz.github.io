const poeti = [
    {
        nome: "Dante",
        tag: ["poeta", "stilnovo", "1300", "firenze", "politica"],
        opere: ["Divina Commedia", "La Monarchia", "De Vulgari Eloquentia", "Vita Nova", "Rime"]
    },
    {
        nome: "Petrarca",
        tag: ["poeta", "umanesimo", "1300", "arezzo", "amore"],
        opere: ["Epistolario", "Secretum", "Il Canzoniere"]
    },
    {
        nome: "Machiavelli",
        tag: ["poeta", "umanesimo", "1400", "firenze", "politica"],
        opere: ["Il Principe", "Epistolario", "La Mandragola"]
    }
]

function operaLetteratura() {
    var random = Math.floor(Math.random() * poeti.length);
    var poeta = poeti[random];
    random = Math.floor(Math.random() * poeta.opere.length);
    var opera = poeta.opere[random];

    return [opera, poeta.nome];
}

function getPoeta(tag) {
    var risultati = [];
    if (tag == undefined) {
        risultati = poeti;
    }
    else {
        for (const persona of poeti) {
            for (var line of tag) {
                if (persona.tag.includes(line)) {
                    risultati.push(persona.nome);
                }
            }

        }
    }
    var random = generaValoriCasualiUnici(0, risultati.length - 1, 2);
    var end = [];

    for (i = 0; i < 2; i++) {
        end.push(risultati[random[i]].nome);
    }

    console.log(end);
    return end;
}

function randomIp() {
    var netID = Math.floor(Math.random() * 223);
    return netID + "." + Math.floor(Math.random() * 225) + "." + Math.floor(Math.random() * 225) + "." + Math.floor(Math.random() * 225);
}
function ipClass(ip) {
    var netID = ip.substr(0, 3);
    if (parseInt(netID) < 128) return "A";
    else if (parseInt(netID) < 192) return "B";
    else if (parseInt(netID) < 224) return "C";
    else return null;
}
function funz_matematica() {
    var random = Math.floor(Math.random() * 5);
    switch (random) {
        case 0:
            //funzione mista
            break;

        case 1:
        //funzione fratta

        case 2:
            //funzione irrazionale
            break;

        case 3:
            //funzione goniometrica
            break;

    }
}

function generaValoriCasualiUnici(min, max, quantità) {
    if (max - min + 1 < quantità) {
        throw new Error('Impossibile generare valori unici nel range specificato.');
    }

    const valoriUnici = new Set();
    while (valoriUnici.size < quantità) {
        const valoreCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
        valoriUnici.add(valoreCasuale);
    }

    return Array.from(valoriUnici);
}
