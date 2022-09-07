import { library } from "@fortawesome/fontawesome-svg-core";
/*icon list*/
import { faCircleDown, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const useFontAwesome = () => {
    return library.add(faCircleDown, faRightFromBracket)
}

export default useFontAwesome;