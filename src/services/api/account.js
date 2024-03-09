import useFetch from "../../hooks/useFetch";


export function registerUser(body){
    return useFetch({
        url : '/users/register',
        method : 'POST',
        body,
        multipart : true
    })
}



export function loginUser(body){
    return useFetch({
        url : '/users/login',
        method : 'POST',
        body
    })
}

export function getUserInfo(token) {
    return useFetch({
        url : '/users/get_current_user',
        token
    })
}
