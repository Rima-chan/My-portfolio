import ProjectModal from "./ProjectModal";

function ProjectCard(props) {
    return(
        <div className="w-full shadow-lg overflow-hidden flex flex-col justify-between bg-white">
            <img src={props.project.attachments[0]} alt="Capture écran du projet" className="flex-1 object-cover"></img>
            <div className="group">
                <ProjectModal project={props.project}></ProjectModal>
            </div>
         </div>
    );
}
export default ProjectCard;
