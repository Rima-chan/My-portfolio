import Carousel from "./Carousel";
import ProjectModal from "./ProjectModal";

function ProjectCard(props) {
    return(
        <div className="shadow overflow-hidden">
            <Carousel images={props.project.attachments}></Carousel>
            <div className="flex flex-col items-center w-full text-center py-5 px-3 md:px-2">
                <div className="flex">
                    <h3 className="font-semibold uppercase">{props.project.title}</h3>
                    <ProjectModal project={props.project}></ProjectModal>
                </div>
                <p className="font-light uppercase pt-3">{props.project.langages}</p>
            </div>
         </div>
    );
}
export default ProjectCard;
