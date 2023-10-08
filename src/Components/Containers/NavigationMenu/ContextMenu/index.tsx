import { secondary } from "../../../../Commons/colors"

type ContextMenuProps = {
    show: boolean
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

const ContextMenu = (props: ContextMenuProps) => {
    return (
        props.show ?
            <div style={{
                zIndex: 11,
                borderRadius: 10,
                position: 'absolute',
                top: '12%',
                left: '4.7%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: `${secondary}`,
                padding: '20px',
                boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, 0.2)',
            }}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                Teste
            </div>
            : null
    )
}

export default ContextMenu