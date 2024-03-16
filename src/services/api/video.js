import useFetch from "../../hooks/useFetch";


export function uploadVideo(body){
    return useFetch({
        url : '/video/uploadVideo',
        method : 'POST',
        body,
        multipart : true
    })
}