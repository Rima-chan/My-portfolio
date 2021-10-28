function SkillItem(props) {
    return(
        <>
        <div className="flex items-center group">
            <div className="flex-shrink-0 rounded-full w-10 h-10 border-2 sm:w-12 sm:h-12 flex items-center justify-center border-red-500 text-red-500 transition-all duration-200 ease-in-out group-hover:bg-red-500 group-hover:text-white">
                <i className={`fas ${props.icon} sm:text-lg`}></i>
            </div>
            <p className="text-sm sm:text-lg font-medium uppercase pl-3 sm:pl-5">{props.content}</p>
        </div>
        </>
    );
}

export default SkillItem;