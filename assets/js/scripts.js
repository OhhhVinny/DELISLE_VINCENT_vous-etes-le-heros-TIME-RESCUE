// Les différent chapitres de l'histoire
const chapters = {
  debut: {
    titre: "LE DISPOSITIF TEMPOREL!",
    description:
      "Le gouvernement a annoncé qu'une catastrophe apocalyptique se produira le 31 décembre 2050. Un homme savant du nom de Jean a réparé son dispositif pour voyager dans le temps mais doit le réparer à chaque aller-retour. Jean a parfois des troubles de mémoire et n'est plus certain de comment l'activer.",
    video: "./assets/videos/timeGif.mp4",
    boutons: [
      { titre: "Avec sa mémoire", destination: "mort1" },
      { titre: "Relire ses notes", destination: "decision" },
    ],
  },

  decision: {
    titre: "CHOIX DE LA DESTINATION",
    description:
      "Après avoir bien relu vos notes, trois destinations temporelles sont possibles pour Jean!",
    image: "./assets/images/decision.jpg",
    boutons: [
      { titre: "Le futur", destination: "futur" },
      { titre: "Bouton Rouge", destination: "mort1" },
      { titre: "Le passé", destination: "passe" },
    ],
  },

  futur: {
    titre: "ATTERISSAGE APOCALYPTIQUE",
    description:
      "Vous vous téléportez dans le stationnement du métro Montmorency et tous les bâtiments sont détruits, sans aucun signe de vie à l'horizon. Vous vous demandez où vous rendre pour trouver des informations sur la catastrophe.",
    image: "./assets/images/futur.jpg",
    boutons: [
      { titre: "Base militaire", destination: "militaire" },
      { titre: "Montréal", destination: "mort2" },
    ],
  },

  passe: {
    titre: "LA RENAISSANCE",
    description:
      "Vous arrivez à l'époque de la Renaissance. Vous vous demandez à qui demander de l'aide pour sauver le futur.",
    image: "./assets/images/passe.jpg",
    boutons: [
      { titre: "Les passants", destination: "taverne" },
      { titre: "Les gardes", destination: "mort3" },
      { titre: "La taverne", destination: "taverne" },
    ],
  },

  militaire: {
    titre: "BASE MILITAIRE",
    description:
      "Vous arrivez à la base militaire canadienne. En fouillant dans les documents du bureau principal, vous trouvez plein de documents avec des informations cruciales. Les documents ont un timbre avec le nombre 16. Vous retournez à la maison pour les analyser.",
    image: "./assets/images/militaire.jpg",
    boutons: [{ titre: "Retour au début", destination: "debut" }],
  },

  taverne: {
    titre: "LA TAVERNE DU COIN",
    description:
      "Vous rentrez dans la taverne de la ville et vous apercevez Léonard de Vinci en train de boire une bière seul au bar. Vous lui expliquez la situation. Léonard, en panique, vous demande si vous avez des preuves.",
    image: "./assets/images/taverne.jpg",
    boutons: [
      { titre: "Oui", destination: "atelier" },
      { titre: "Non", destination: "mort4" },
    ],
  },

  atelier: {
    titre: "L'ATELIER",
    description:
      "Vous rentrez dans l'atelier du célèbre Leonard et celui-ci commence à lire les documents que vous avez apportés. Il vous explique qu'un dérèglement temporel subi en 2023 a causé la catastrophe de 2050. À grande vitesse, il se met à construire une petite horloge. Après un certain temps, il ne reste qu'une seule étape et c'est de régler l'horloge à l'heure exacte de l'apocalypse. L'avenir est entre vos mains, dit-il d'un ton inquiet...",
    image: "./assets/images/atelier.jpg",
    boutons: [
      { titre: "7h00", destination: "mort5" },
      { titre: "16h00", destination: "fin" },
      { titre: "22h00", destination: "mort5" },
    ],
  },

  mort1: {
    titre: "FIN TRAGIQUE",
    description:
      "Vous activez le dispositif temporel en vous fiant à votre mémoire et vous vous retrouvez à l'ère préhistorique près de la famille d'un T-Rex.",
    video: "./assets/videos/trexGif.mp4",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort2: {
    titre: "MONTRÉAL",
    description:
      "Vous vous rendez en ville pour tenter de trouver des informations. Malheureusement, vous vous perdez dans un labyrinthe de pistes cyclables et un groupe de bandits vous aperçoit et détruisent votre dispositif temporel.",
    image: "./assets/images/mort2.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort3: {
    titre: "PRISON",
    description:
      "Les gardes vous ont pris pour un fou et vous emprisonnent. Vous êtes pris dans le passé.",
    image: "./assets/images/mort3.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort4: {
    titre: "PARTY!",
    description:
      "Vous continuez à boire avec Léonard de Vinci jusqu'aux petites heures du matin et retournez à la maison le lendemain pour trouver des preuves",
    image: "./assets/images/mort4.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort5: {
    titre: "PROBLÈME DE MÉMOIRE",
    description:
      "Le temps se fige pendant un instant et vous vous retrouvez devant l'atelier de Leonard pour apercevoir une apocalypse prématurée",
    image: "./assets/images/mort5.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  fin: {
    titre: "FÉLICITATION!",
    description:
      "Félicitations ! Vous avez restauré l'équilibre temporel et sauvé le futur de la planète Terre",
    image: "./assets/images/fin.jpg",
    boutons: [{ titre: "Retour au début", destination: "debut" }],
  },
};

//Creation de l'élément audio
let audioElement = document.createElement("audio");
audioElement.src = "/assets/audio/effet_sonore_ufo.mp3";
document.body.appendChild(audioElement);
//creation de la case mute
const mute = document.createElement("input");
mute.type = "checkbox";
mute.classList.add("mute");
mute.addEventListener("change", () => {
  // statut mute dans le localStorage
  localStorage.setItem("muteStatus", mute.checked);
  // Mise à jour de la lecture audio en fonction du statut mute
  audioElement.muted = mute.checked;
});
// Création du label associé
const muteLabel = document.createElement("label");
muteLabel.appendChild(document.createTextNode("Muet"));

// Fonction permettant la fonctionnalité et l'affichage des éléments selon le chapitre
function goToChapter(chapitreNom) {
  // Récupération du statut mute depuis le localStorage
  let muteStatus = localStorage.getItem("muteStatus");
  //Si pas encore de localstorage de l'état du checkbox, on initialise à false
  if (muteStatus === null) {
    muteStatus = false;
    localStorage.setItem("muteStatus", mute.checked);
  }
  // Démarrer ou arrêter l'audio en fonction du statut mute
  if (muteStatus === "false") {
    audioElement.currentTime = 0;
    audioElement.play();
  } else {
    audioElement.pause();
  }

  // On recupere la twist dans localStorage
  let twist = localStorage.getItem("twistActivated");
  //Sauvegarde du chapitre atteint dans le local Storage
  localStorage.setItem("chapterAtteint", chapitreNom);

  if (typeof chapitreNom === "string" && chapitreNom in chapters) {
    const chapitre = chapters[chapitreNom];
    // Change le titre pour celui du chapitre approprié
    const titre = document.querySelector(".titre");
    titre.innerHTML = chapitre.titre;

    // Change la description pour celle du chapitre approprié
    const description = document.querySelector(".description");
    description.innerHTML = chapitre.description;

    //Recuperation du conteneur de media
    let media = document.getElementById("media");
    // Si l'objet a une vidéo
    if (chapitre.video) {
      // on creer une balise video avec les contrainte
      media.innerHTML = `<video class="video" muted autoplay loop><source src="${chapitre.video}" type="video/mp4"></video>`;
    } else {
      // Si pas de vidéo, afficher l'image normalement
      media.innerHTML = `<img class="image" src="${
        chapitre.image
      }" alt="${""}">`;
    }

    // Supprime les boutons présents et rajoute ceux du chapitre approprié
    const boutons = document.querySelector(".boutons");
    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }

    for (let i = 0; i < chapitre.boutons.length; i++) {
      const btn = chapitre.boutons[i];
      const nouveauBtn = document.createElement("button");
      nouveauBtn.textContent = btn.titre;
      nouveauBtn.setAttribute("class", "button-78");

      nouveauBtn.addEventListener("click", () => {
        goToChapter(btn.destination);
      });

      boutons.appendChild(nouveauBtn);
    }

    //Si on atteint le chapitre militaire, twist devient true
    if (chapitreNom === "militaire") {
      localStorage.setItem("twistActivated", "true");
    }

    //Si on atteint le chapitre de la fin, twist devient false pour si on recommence à jouer
    if (chapitreNom === "fin") {
      localStorage.removeItem("twistActivated");
    }

    //On active/désactive le bouton qui requiert la clé selon si elle a été trouvée
    if (chapitreNom === "taverne") {
      const boutonOui = boutons.querySelector("button:nth-child(1)"); // Le premier bouton (Oui)
      boutonOui.disabled = !twist; // Inversion de la condition
    }
  }
}

//Fonction pour charger le chapitre dans le storage
function chargerProgression() {
  let nomChapitre = localStorage.getItem("chapterAtteint");

  if (nomChapitre && chapters[nomChapitre]) {
    goToChapter(nomChapitre);
  } else {
    goToChapter("debut");
  }
}
chargerProgression();

//creation du bouton reset
const boutonReset = document.createElement("button");
boutonReset.textContent = "Réinitialiser";
boutonReset.classList.add("button-78");
boutonReset.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
document.body.appendChild(boutonReset);
document.body.appendChild(mute);
document.body.appendChild(muteLabel);
