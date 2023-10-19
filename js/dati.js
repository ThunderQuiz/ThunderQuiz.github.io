const poeti =[
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
];

function randomIp(){
    var netID = Math.floor(Math.random()*223);
    return netID + "." + Math.floor(Math.random()*225) + "." + Math.floor(Math.random()*225) + "." + Math.floor(Math.random()*225);
}
function ipClass(ip){
    var netID = ip.substr(0, 3);
    if(parseInt(netID) < 128) return "A";
    else if(parseInt(netID) < 192) return "B";
    else if(parseInt(netID) < 224) return "C";
    else return null;
}
function funz_matematica(){
    var random = Math.floor(Math.random() * 5);
    switch(random){
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
