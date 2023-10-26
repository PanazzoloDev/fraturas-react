import { toolbarActionType } from "../../../../Commons/types";
import { ActionButton } from "./style";


const ToolbarAction = (props: toolbarActionType) => {
    const { icon, onClick } = props
    return (
        <ActionButton
            onClick={onClick}
        >
            {icon()}
        </ActionButton>
    )
}

export default ToolbarAction;