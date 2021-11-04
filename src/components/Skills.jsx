import SkillBar from "./SkillBar";
import SkillItem from "./SkillItem";
import bgSkill from '../images/bg-server.jpg';

function Skills() {
    const skillsList = {
        "skill_1": "Intégrer une page web depuis une maquette",
        "skill_2": "Intéragir avec l'utilisateur et des services externes en JavaScript",
        "skill_3": "Concevoir un serveur NodeJS et une base de données sécurisés",
        "skill_4": "Optimiser la visibilité (SEO) et l'accessbilité d'un site",
    }
    return(
        <>
        <div className="bg-cover bg-no-repeat pb-16" style={{ backgroundImage: `url(${bgSkill})`}} id="skills">
            <h2 className="uppercase text-3xl md:text-4xl tracking-widest text-center font-bold py-10 text-white">Mes compétences</h2>
            <div className="flex flex-wrap md:gap-10 md:flex-nowrap bg-gray-50 bg-opacity-80 px-4 mx-4 py-6 sm:pt-5 sm:pb-10 sm:px-10 lg:max-w-4xl lg:mx-auto lg:justify-center xl:max-w-5xl">
                <div className="flex-1 md:pt-0">
                    <h3 className="text-center uppercase font-bold py-2">Front-end</h3>
                    <ul className="">
                        <li><SkillBar name="HTML - CSS" rate="w-9/10"></SkillBar></li>
                        <li><SkillBar name="JAVASCRIPT" rate="w-5/6"></SkillBar></li>
                        <li><SkillBar name="REACT" rate="w-3/5"></SkillBar></li>
                        <li><SkillBar name="VUE" rate="w-3/10"></SkillBar></li>
                    </ul>
                    <h3 className="text-center uppercase font-bold pt-5 pb-2">Back-end</h3>
                    <ul>
                        <li><SkillBar name="NODEJS - Express" rate="w-7/10"></SkillBar></li>
                        <li><SkillBar name="NOSQL - MongoDB" rate="w-3/5"></SkillBar></li>
                        <li><SkillBar name="MySQL" rate="w-2/5"></SkillBar></li>
                    </ul>
                    <h3 className="text-center uppercase font-bold pt-5 pb-2">CMS</h3>
                    <ul>
                        <li><SkillBar name="WORDPRESS" rate="w-1/5"></SkillBar></li>
                    </ul>
                </div>
                <div className="md:flex-1 self-center flex flex-col gap-y-8 pt-10">
                    <SkillItem content={skillsList.skill_1} icon="fa-cubes"></SkillItem>
                    <SkillItem content={skillsList.skill_2} icon="fa-laptop"></SkillItem>
                    <SkillItem content={skillsList.skill_3} icon="fa-database"></SkillItem>
                    <SkillItem content={skillsList.skill_4} icon="fa-search"></SkillItem>
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;