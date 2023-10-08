import { MenuItemContainer } from './style'

type MenuItemProps = {
    icon: React.ReactElement,
    label: string
    onMouseEnter: () => void
    onMouseLeave: () => void
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <MenuItemContainer
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {props.icon}
        </MenuItemContainer>
    )
}

export default MenuItem