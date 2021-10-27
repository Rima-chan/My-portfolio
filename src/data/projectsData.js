const projects = {
    "projects": [
        {
            "id": "p1",
            "title": "Site e-commerce",
            "type": "Projet formation web",
            "attachments": ['./images/p1_img1.jpg', 'p1_img2.jpg', 'p1-img3.png'],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "details": [
                "Lorem ipsum dolor sit amet",
                "consectetur adipiscing elit"
            ]
        },
        {
            "id": "p2",
            "title": "API Rest pour un site d'avis gastro",
            "type": "Projet formation web",
            "attachments": ['p2_img1.jpg', 'p2_img2.jpg', 'p2_img3.jpg'],
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "details": [
                "Lorem ipsum dolor sit amet",
                "consectetur adipiscing elit"
            ]
        }
    ] 
}

exports.find = () => {
    return new Promise((resolve, reject) => resolve(projects));
}