import { library } from "@fortawesome/fontawesome-svg-core";
/*icon list*/
import { faCircleDown, faRightFromBracket, faFile } from "@fortawesome/free-solid-svg-icons";

const useFontAwesome = () => {
    return library.add(faCircleDown, faRightFromBracket, faFile)
}

export default useFontAwesome;