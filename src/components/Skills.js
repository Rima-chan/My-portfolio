import SkillBar from "./SkillBar";
import SkillItem from "./SkillItem";

function Skills() {
    const skillList_1 = 'Intégrer une page web depuis une maquette';
    const skillList_2 = 'Intéragir avec l\'utilisateur et des services externes en JavaScript';
    const skillList_3 = 'Concevoir un serveur NodeJS et une base de données sécurisés';
    const skillList_4 = 'Optimiser la visibilité (SEO) et l\'accessbilité d\'un site';
    return(
        <>
        <div className="container mx-auto" id="skills">
            <h2 className="uppercase text-4xl text-center font-bold my-10">Mes compétences</h2>
            <div class="flex flex-wrap md:gap-20 md:flex-nowrap">
                <div class="flex-1 md:pt-0">
                    <h3 className="text-center uppercase font-bold text-sm py-2">Front-end</h3>
                    <ul>
                        <li><SkillBar name="HTML - CSS" rate="w-9/10"></SkillBar></li>
                        <li><SkillBar name="JAVASCRIPT" rate="w-5/6"></SkillBar></li>
                        <li><SkillBar name="REACT" rate="w-3/5"></SkillBar></li>
                        <li><SkillBar name="VUE" rate="w-3/10"></SkillBar></li>
                    </ul>
                    <h3 className="text-center uppercase font-bold text-sm pt-5 pb-2">Back-end</h3>
                    <ul>
                        <li><SkillBar name="NODEJS - Express" rate="w-7/10"></SkillBar></li>
                        <li><SkillBar name="NOSQL - MongoDB" rate="w-3/5"></SkillBar></li>
                        <li><SkillBar name="MySQL" rate="w-2/5"></SkillBar></li>
                    </ul>
                    <h3 className="text-center uppercase font-bold text-sm pt-5 pb-2">CMS</h3>
                    <ul>
                        <li><SkillBar name="WORDPRESS" rate="w-2/5"></SkillBar></li>
                    </ul>
                </div>
                <div class="md:flex-1 self-center flex flex-col gap-y-8">
                    <SkillItem content={skillList_1} icon="fa-cubes"></SkillItem>
                    <SkillItem content={skillList_2} icon="fa-laptop"></SkillItem>
                    <SkillItem content={skillList_3} icon="fa-database"></SkillItem>
                    <SkillItem content={skillList_4} icon="fa-search"></SkillItem>
                </div>
            </div>
            {/* <button>Téléchargez un CV</button> */}
        </div>
        </>
    );
}

export default Skills;