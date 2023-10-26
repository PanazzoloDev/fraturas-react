import { RowActionContainer } from "./style"
type RowActionProps = {
    children: React.ReactNode
    onClick: () => void
}
const RowAction = (props: RowActionProps) => {

    return (
        <RowActionContainer
            onClick={props.onClick}
        >
            {props.children}
        </RowActionContainer>
    )
}

export default RowAction