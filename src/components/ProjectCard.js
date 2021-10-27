import Carousel from "./Carousel";

function ProjectCard(props) {
    const imageUrl = ` ${window.location.origin}`;
    const images = props.project.attachments.map(img => imageUrl + img);
    return(
        <div className="shadow overflow-hidden py-4 pt-5">
            <Carousel images={props.project.attachments}></Carousel>
            <div>
                <h3>{props.project.title}</h3>
            </div>
        </div>
    );
}
export default ProjectCard;