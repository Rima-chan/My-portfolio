function SkillItem(props) {
    return(
        <>
        <div class="flex items-center group">
            <div class="flex-shrink-0 rounded-full w-12 h-12 flex items-center justify-center border-4 border-red-500 text-red-500 transition-all duration-200 ease-in-out group-hover:bg-red-500 group-hover:text-white">
                <i class={`fas ${props.icon} fa-lg`}></i>
            </div>
            <p class="text-lg font-medium uppercase pl-5">{props.content}</p>
        </div>
        </>
    );
}

export default SkillItem;