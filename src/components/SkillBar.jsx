function SkillBar(props) {
    return (
        <>
            <span className="text-red-600 text-sm font-semibold whitespace-nowrap pr-3">{props.name}</span>
            <span className="progress_bar bg-gray-50  rounded inline-flex w-full h-4 ">
                <span className={`block bg-red-500 rounded-l py-2 ${props.rate} origin-left animate-skill-bar`}></span>
            </span>
        </>
    );
}

export default SkillBar;