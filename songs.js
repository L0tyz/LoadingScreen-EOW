// ══════════════════════════════════════════════════════════════════════════════
//  Configuration des morceaux – Loading Screen
// ══════════════════════════════════════════════════════════════════════════════
//
//  Chaque objet dans le tableau représente une piste.
//
//  Champs disponibles :
//    name   (string)  – Titre du morceau
//    author (string)  – Artiste / auteur
//    album  (string)  – Nom de l'album  (affiché en tooltip sur la pochette)
//    cover  (string)  – Chemin vers l'image de pochette, ex : "audio/covers/cover1.jpg"
//                       Laissez "" pour afficher l'icône musicale par défaut.
//    src    (string)  – Chemin vers le fichier audio
//
//  Formats audio supportés : .mp3  .ogg  .wav
//  Formats image supportés  : .jpg  .jpeg  .png  .webp
//
//  ⚠  Pensez à déclarer les nouveaux fichiers audio et images dans fxmanifest.lua
//     sous la section  files { ... }
//
// ══════════════════════════════════════════════════════════════════════════════

var SONGS = [
    {
        name:   "APPELLE LA POLICE",
        author: "JSTE DAVID",
        album:  "",
        cover:  "cover/jstedavid.png",
        src:    "audio/music.mp3"
    },

    {
        name:   "BAD BOYS",
        author: "INNER CIRCLE",
        album:  "",
        cover:  "cover/badboys.png",
        src:    "audio/badboys.mp3"

    },

    {
        name:   "LA POLICE",
        author: "TKS 2G",
        album:  "",
        cover:  "cover/tks.png",
        src:    "audio/lapolice.mp3"

    },

    {
        name:   "SOUND OF DA POLICE",
        author: "KRS-ONE",
        album:  "",
        cover:  "cover/krs.png",
        src:    "audio/sounddapolice.mp3"

    },

        {
        name:   "DADDY COP",
        author: "THE ROOKIE TV SHOW - ZANDER HAWLEY ",
        album:  "",
        cover:  "cover/daddycop.png",
        src:    "audio/daddycop.mp3"

    },
            {
        name:   "BEVERLY HILLS COPS MAIN THEME ",
        author: "AXEL F",
        album:  "",
        cover:  "cover/beverly.png",
        src:    "audio/beverly.mp3"

    }

    // Exemple pour ajouter un second morceau :
    // ,{
    //     name:   "Deuxième Piste",
    //     author: "Autre Artiste",
    //     album:  "Autre Album",
    //     cover:  "audio/covers/cover2.jpg",
    //     src:    "audio/track2.mp3"
    // }
];
