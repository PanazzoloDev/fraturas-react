import { TextField } from '@mui/material';
import { isFunction } from 'lodash';
import { typeControl } from '../../../Commons/types';

const TextInput = (props: typeControl) => {

    const handleUpdate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        isFunction(props.onChange) && props.name != null ?
            props.onChange(
                props.name,
                { ...props, value: event.target.value }
            ) : () => { }
    }

    return (
        <TextField
            variant="standard"
            name={props.name}
            label={props.label}
            placeholder={props.alias}
            onChange={handleUpdate}
            fullWidth
        >
            {props.value}
        </TextField>
    )
}
export default TextInput;