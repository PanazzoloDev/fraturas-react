import BaseStore from "../../../Components/Stores/BaseStore";

class LoginStore extends BaseStore {
    constructor() {
        super(
            {
                username: {
                    alias: 'Insira o seu usuário',
                    label: 'Usuário',
                    value: ''
                },
                password: {
                    alias: 'Insira a sua senha.',
                    label: 'Senha',
                    value: ''
                },
            }
        );
    }
}
const store = new LoginStore();
export default store;