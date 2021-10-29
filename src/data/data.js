import { p1_img, p2_img, p3_img, p4_img } from './projectsImages';

export const projects = {
    "data": [
        {
            "id": "p1",
            "title": "Site e-commerce",
            "type": "Projet formation web",
            "attachments": p1_img,
            "description": "Réalisation du MVP front-end d'un site e-commerce uniquement en CSS, HTML et JavaScript.",
            "langages": "Html, CSS, Javascript",
            "tags": ["html", "css", "javascript", "bootstrap"],
            "details": [
                "Communication avec une API",
                "Panier shopping",
                "Formulaire sécurisé"
            ],
            "url": "https://rima-chan.github.io/E-commerce_Website/",
            "github": "https://github.com/Rima-chan/E-commerce_Website.git"
        },
        {
            "id": "p2",
            "title": "API Rest pour un site d'avis gastro",
            "type": "Projet formation web",
            "attachments": p2_img,
            "description": "Réalisation d'une API REST (CRUD) pour un site d'avis gastronomiques (sauces piquantes).",
            "langages": "NodeJS, Express, MongoDB",
            "tags": ["NodeJS", "Express", "MongoDB"],
            "details": [
                "Creation et authentification utilisateur",
                "Création, ajout et modification de sauces",
                "Système Like/Dislikes",
                "Base de données sécurisés"
            ],
            "github": "https://github.com/Rima-chan/MarieBeaujeu_6_31072021.git"
        },
        {
            "id": "p3",
            "title": "Reseau social interne entreprise",
            "type": "Projet formation web",
            "attachments": p3_img,
            "langages": "NodeJS, Express, Sequelize, Vue",
            "description": "Réalisation du MVP d'un réseau social (partages d'images style 9gag) interne avec profils administrateurs.",
            "tags": ["NodeJS", "Express", "Sequelize", "MySQL", "VueJS", "Bootstrap"],
            "details": [
                "Creation compte, connexion, déconnexion utilisateur",
                "Authentification utilisateur (normal/administrateur)",
                "Publication, modification, suppresion d'un post",
                "Publication, modification, suppression commantaire",
                "Modification, suppression d'un profil utilisateur",

            ],
            "github": "https://github.com/Rima-chan/MarieBeaujeu_7_21082021.git"
        },
        {
            "id": "p4",
            "title": "Apps JS",
            "type": "Projet perso",
            "attachments": p4_img,
            "langages": "Javascript",
            "description": "Petites applications en Javascript",
            "tags": ["CSS", "Html", "Javascript"],
            "details": [
                "Lorem ipsum dolor sit amet",
                "consectetur adipiscing elit"
            ],
            "url": "https://rima-chan.github.io/Apps-JS/",
            "github": "https://github.com/Rima-chan/Apps-JS.git"
        }
    ] 
}

export const skillsList = {
    "skill_1": "Intégrer une page web depuis une maquette",
    "skill_2": "Intéragir avec l'utilisateur et des services externes en JavaScript",
    "skill_3": "Concevoir un serveur NodeJS et une base de données sécurisés",
    "skill_4": "Optimiser la visibilité (SEO) et l'accessbilité d'un site",
}
