import { observer } from "mobx-react"
import TextInput from "../../../Components/Inputs/TextInput"
import LoginStore from "../Stores/HomeStore"

const FormLoginContainer = observer(() => {
    const {
        username,
        password,
    } = LoginStore.controls

    const { changeFormControl } = LoginStore
    return (
        <>
            <TextInput
                name="username"
                label={username.label}
                value={username.value}
                alias={username.alias}
                onChange={changeFormControl}
            />
            <TextInput
                name="password"
                label={password.label}
                value={password.value}
                alias={password.alias}
                onChange={changeFormControl}
            />
        </>

    )
})

export default FormLoginContainer