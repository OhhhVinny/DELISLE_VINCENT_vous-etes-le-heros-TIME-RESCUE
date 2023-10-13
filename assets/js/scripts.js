// Variable qui agit comme clé du chapitre taverne
let twist = false;

// Les différent chapitres de l'histoire
const chapters = {
  debut: {
    titre: "Le dispositif temporel",
    description:
      "Le gouvernement a annoncé qu'une catastrophe apocalyptique se produira le 31 décembre 2050. Un homme savant du nom de Jean a réparé son dispositif pour voyager dans le temps mais doit être réparer à chaque allez-retour. Jean a parfois des troubles de mémoire et n'est plus certain de comment l'activer.",
    image: "./assets/images/debut.jpg",
    boutons: [
      { titre: "Avec sa mémoire", destination: "mort1" },
      { titre: "Relire ses notes", destination: "decision" },
    ],
  },

  decision: {
    titre: "Choix de la destination",
    description:
      "Après avoir bien relu vos notes, trois destinations temporelles sont possible pour Jean!",
    image: "./assets/images/decision.jpg",
    boutons: [
      { titre: "Le futur", destination: "futur" },
      { titre: "Bouton Rouge", destination: "mort1" },
      { titre: "Le passé", destination: "passe" },
    ],
  },

  futur: {
    titre: "Atterissage apocalyptique",
    description:
      "Vous vous téléportez dans le stationnement du métro Montmorency et tous les bâtiments sont détruits avec aucun signe de vie à l'horizon. Vous vous demandez où se rendre pour trouver des informations sur la catastrophe ",
    image: "./assets/images/futur.jpg",
    boutons: [
      { titre: "Base militaire", destination: "militaire" },
      { titre: "Montréal", destination: "mort2" },
    ],
  },

  passe: {
    titre: "La Renaissance",
    description:
      "Vous arrivé à l'époque de la Renaissance. Vous vous demander à qui demander de l'aide pour sauver le futur",
    image: "./assets/images/passe.jpg",
    boutons: [
      { titre: "Les passants", destination: "taverne" },
      { titre: "Les gardes", destination: "mort3" },
      { titre: "La taverne", destination: "taverne" },
    ],
  },

  militaire: {
    titre: "Base militaire",
    description:
      "Vous arrivez à la base militaire canadienne. En fouillant des les documents du bureau principal, vous trouvez pleins de documents avec des informations crucial. Les documents ont un timbre avec le nombre 16. Vous retournez à la maison pour les analyser",
    image: "./assets/images/militaire.jpg",
    boutons: [{ titre: "Retour au début", destination: "debut" }],
  },

  taverne: {
    titre: "La taverne du coin",
    description:
      "Vous rentrez dans la taverne de la ville et vous appercevez Léonard de Vinci entrain de boire une bière seul au bar. Vous lui expliquez la situation. Léonard en panique vous demande si vous avez des preuves",
    image: "./assets/images/taverne.jpg",
    boutons: [
      { titre: "Oui", destination: "atelier" },
      { titre: "Non", destination: "mort4" },
    ],
  },

  atelier: {
    titre: "L'atelier",
    description:
      "Vous rentrez dans l'atelier du célèbre Leonard et celui-ci commence à lire les documents que vous avez apportés. Il vous expliquent qu'un déreglement temporel subit en 2023 a causé la catastrophe de 2050. À grande vitesse, il se met à construire une petite horloge. Après un certain temps, il ne reste qu'une seule étape et s'est de régler l'horloge à l'heure exacte de l'apocalypse. L'avenir est entre vos mains, dit-il d'un ton inquiet...",
    image: "./assets/images/atelier.jpg",
    boutons: [
      { titre: "7h00", destination: "mort5" },
      { titre: "16h00", destination: "fin" },
      { titre: "22h00", destination: "mort5" },
    ],
  },

  mort1: {
    titre: "Fin tragique",
    description:
      "Vous activez le dispositif temporel en vous fiant à votre mémoire et vous vous retrouver à l'ère préhistorique près de la famille d'un T Rex",
    image: "./assets/images/mort1.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort2: {
    titre: "Montréal",
    description:
      "Vous vous rendez en ville dans le bureau de la mairesse pour tenter de trouver des informations. Malheureusement un groupe de bandit vous apperçoit et détruisent votre dispotif temporel",
    image: "./assets/images/mort2.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort3: {
    titre: "Prison",
    description:
      "Les gardes vous a pris pour un fou et vous emprisonne. Vous êtes pris dans le passé",
    image: "./assets/images/mort3.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort4: {
    titre: "Party!",
    description:
      "Vous continuez à boire avec Léonard de Vinci jusqu'aux petites heures du matin et retournez à la maison le lendemain pour trouvez des preuves",
    image: "./assets/images/mort4.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  mort5: {
    titre: "Problème de mémoire",
    description:
      "Le temps fige pendant un instant et vous vous retrouvez devant l'atelier de Leonard pour aperçevoir une apocalypse prématurée",
    image: "./assets/images/mort5.jpg",
    boutons: [{ titre: "Retour au debut", destination: "debut" }],
  },

  fin: {
    titre: "Félicitation!",
    description:
      "Le temps fige pendant un instant et vous êtes de retour à la maison. Félicitations ! Vous avez restaurer l'équilibre temporel et sauvez le futur de la planète Terre",
    image: "./assets/images/fin.jpg",
    boutons: [{ titre: "Retour au début", destination: "debut" }],
  },
};

// Fonction permettant la fonctionnalité et l'affichage des éléments selon le chapitre
function goToChapter(chapitreNom) {

  if(typeof chapitreNom === 'string' && chapitreNom in chapters){
    const chapitre = chapters[chapitreNom];
    // Change le titre pour celui du chapitre approprié
    const titre = document.querySelector(".titre"); 
    titre.innerHTML = chapitre.titre;
  
    // Change la description pour celle du chapitre approprié
    const description = document.querySelector(".description");
    description.innerHTML = chapitre.description;
  
    // Change le src de l'image pour celle du chapitre approprié
    const image = document.querySelector(".image");
    image.setAttribute("src", chapitre.image);
  
    // Supprime les boutons présents et rajoute ceux du chapitre approprié
    const boutons = document.querySelector(".boutons");
    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }

    for (let i = 0; i < chapitre.boutons.length; i++) {
      const btn = chapitre.boutons[i];
      const nouveauBtn = document.createElement("button");
      nouveauBtn.textContent = btn.titre;
  
      nouveauBtn.addEventListener("click", () => {
        goToChapter(btn.destination);
      });

      boutons.appendChild(nouveauBtn);
    }
  
    //Si on atteint le chapitre militaire, twist devient true
    if (chapitreNom === "militaire") {
      twist = true;
    }
  
    //On active/désactive le bouton qui requiert la clé selon si elle a été trouvée
    if (chapitreNom === "taverne") {
      const boutonOui = boutons.querySelector("button:first-child"); // Le premier bouton (Oui)
      boutonOui.disabled = !twist;
    }
  }
}

goToChapter("debut");
