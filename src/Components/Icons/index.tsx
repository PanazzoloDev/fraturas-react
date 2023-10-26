import {
    Storage as Base,
    Tune as Configuracoes,
    Edit as Editar,
    Add as Novo
} from '@mui/icons-material';

const Registers = () => (<Base fontSize="medium" />)
const Settings = () => (<Configuracoes fontSize="medium" />)
const Create = () => (<Novo fontSize="medium" />)
const Update = () => (<Editar fontSize="medium" />)

export {
    Create, Registers,
    Settings,
    Update
};

