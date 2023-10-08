import { observer } from 'mobx-react';
import { useAuthContext } from '../../Contexts/AuthContext';
import FormLoginContainer from "./Containers/FormLoginContainer";
import LoginStore from "./Stores/LoginStore";
import { ActionArea, LoginTitle, Page } from "./style";

const LoginScreen = observer((): React.ReactNode => {
    const { authenticate } = useAuthContext()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const {
            resetStore,
            controls: {
                username,
                password }
        } = LoginStore;

        authenticate(username.value.toString(), password.value.toString());
        resetStore();
    }

    return (
        <Page>
            <LoginTitle className="title">Bem vindo</LoginTitle>
            <form onSubmit={handleSubmit} className="login-form">
                <FormLoginContainer />
                <ActionArea>
                    <input type="reset" value="Cancelar" />
                    <input type="submit" value="Entrar" />
                </ActionArea>
            </form>
        </Page>
    )
})

export default LoginScreen;