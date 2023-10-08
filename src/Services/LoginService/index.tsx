
import { responseType } from '../../Commons/types'
import { Post } from '../BaseAPI'

const Login = async (username: string, password: string): Promise<responseType | Error> => {
    return Post(`/login?username=${username}&password=${password}`)
        .then(response => response)
}

export {
    Login
}

