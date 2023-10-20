export const Positions = {
    services: [
        "Tutti",
        "Servizio Clienti",
        "Gestione e Amministrazione",
        "Informatica"
    ],

    type: [
        "T",
        "S",
        "G",
        "I"
    ],

    jobs: {
        Barista: {
            title: "Barista notturno",
            desc: "Lavora come barista notturno per servire drink e cocktails ai clienti",
            hours: "01:00 - 06:00",
            type: "S"
        },
        Cameriere: {
            title: "Cameriere",
            desc: "Servi ai clienti i drink e pietanze richieste e preparate dallo chef di fiducia",
            hours: "Mattina - Pomeriggio - Sera",
            type: "S"
        },
        Barman: {
            title: "Barman",
            desc: "Crea, prepara e servi drink ai clienti facendoli ubricare per massimizzare i guadagni",
            hours: "Mattina - Pomeriggio - Sera",
            type: "S"
        },
        StorageManager: {
            title: "Storage Manager",
            desc: "Gestici la prenotazione e consegna dei pacchi Juice Bar",
            hours: "9:00 - 17:00",
            type: "G"
        },
        HeadMarketing: {
            title: "Head Marketing",
            desc: "Gestisci le pubblicità e strategie di marketing per far risaltare Juice bar",
            hours: "Orario d'ufficio",
            type: "G"
        },
        Commercialista: {
            title: "Commercialista",
            desc: "Gestici la commercializzazione aziendale dal punto di vista economico",
            hours: "Chiamata o da accordare",
            type: "G"
        },
        Fotografo: {
            title: "Fotografo",
            desc: "Scatta foto di qualità e di alto livello",
            hours: "Ingaggio",
            type: "I"
        },
        Grafico: {
            title: "Grafico",
            desc: "Crea album, copertine, poster e altre grafiche per il logo Juice Bar",
            hours: "Orario d'ufficio",
            type: "I"
        },
        AddettoAllePulizie: {
            title: "Addetto alla pulizia",
            desc: "Rordina e pulisci",
            hours: "Mattina - Pomeriggio - Sera",
            type: "G"
        },
        DoorManager: {
            title: "Door Manager",
            desc: "Apri tutte le porte dell'edificio, compreso il bagno",
            hours: "Non puoi più uscire",
            type: "S"
        }
    }
}

export const Drinks = {
    Mojrito: {
        drinkModel: "../../Mojrito.gltf",
        name: "Mojrito",
        details: "Il Mojrito è la bevanda perfetta, per chi vuole, insomma hai capito...",
        price: "12,50€"
    },
    Limortacci: {
        drinkModel: "../../Limoncello.gltf",
        name: "Limortacci",
        details: "Oh non sta a fà danni peché se no finisce male ok??? Hai capito??",
        price: "11,80€"
    },
    Marrino: {
        drinkModel: "../../Marrino.gltf",
        name: "Marrino",
        details: "Per le persone a cui manca il mare ma anche i soldi",
        price: "7,50€"
    },
    Wiskonsis: {
        drinkModel: "../../Wiskonsis.gltf",
        name: "Wiskonsis",
        details: "Oya mate! Wanna cathc'a drink whi me? Come o' it's only for 500 dolla's! America🦅 🦅 !!",
        price: "500$"
    }
}