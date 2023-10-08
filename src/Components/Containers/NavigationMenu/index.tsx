
import { useState } from 'react';
import { Registers, Settings } from "../../Icons";
import MenuItem from "../../MenuItem";
import ContextMenu from "./ContextMenu";
import { MenuContainer } from "./style";

const menuItems = [
    {
        key: '1',
        icon: <Registers />,
        label: "Cadastros",
        subItems: [
            { key: '1', label: "Usuários", route: '/Users' },
            { key: '2', label: "Cartões", route: '/Cards' },
            { key: '3', label: "Faturas", route: '/Invoices' }
        ]
    },
    {
        key: '2',
        icon: <Settings />,
        label: "Configurações",
        subItems: [
            { key: '1', label: "Usuários", route: '/Users' },
            { key: '2', label: "Cartões", route: '/Cards' },
            { key: '3', label: "Faturas", route: '/Invoices' }
        ]
    }
]

const NavigationMenu = () => {
    const [needShow, setIfNeedShow] = useState(false);

    return (
        <MenuContainer>
            {menuItems.map((item) => {
                return (
                    <MenuItem
                        key={item.key}
                        label={item.label}
                        icon={item.icon}
                        onMouseEnter={() => setIfNeedShow(true)}
                        onMouseLeave={() => setIfNeedShow(false)}
                    />
                )
            })}
            <ContextMenu
                onMouseEnter={() => setIfNeedShow(true)}
                onMouseLeave={() => setIfNeedShow(false)}
                show={needShow}
            />
        </MenuContainer>
    )
}

export default NavigationMenu;