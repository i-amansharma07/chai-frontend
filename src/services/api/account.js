import useFetch from "../../hooks/useFetch";


export function getUserInfo(token) {
    return useFetch({
        url : '/users/get_current_user',
        token
    })
}


export function loginUser(body){
    return useFetch({
        url : '/users/login',
        method : 'POST',
        body
    })
}