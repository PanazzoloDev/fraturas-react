import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { isFunction } from 'lodash';
import { SearchInputContainer } from './styled';

type searchInputProps = {
    onSearch: () => void
}

const SearchInput = (props: searchInputProps) => {
    const { onSearch } = props;
    return (
        <SearchInputContainer>
            <TextField
                label="Pesquisar"
                variant="outlined"
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={isFunction(props.onSearch) ? onSearch : () => { }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </SearchInputContainer>
    );
}

export default SearchInput;