import Carousel from "./Carousel";
import ProjectModal from "./ProjectModal";

function ProjectCard(props) {
    return(
        <div className="shadow-lg overflow-hidden flex flex-col justify-between">
            <div>
                <Carousel images={props.project.attachments}></Carousel>
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center py-5 px-3 md:px-2">
                <div className="flex">
                    <ProjectModal project={props.project}></ProjectModal>
                </div>
                <p className="font-light uppercase pt-3">{props.project.langages}</p>
            </div>
         </div>
    );
}
export default ProjectCard;
