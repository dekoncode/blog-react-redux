import { fetchDeletepostStart, fetchDeletepostSuccess, fetchDeletepostFailed } from "../actions/actions";

export function fetchDeleteList(id) {
    return (dispatch) => {
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    dispatch(fetchDeletepostStart())

    fetch("https://bloggy-api.herokuapp.com/posts/"+id, requestOptions)
    .then(response => response.text())
    .then(result => dispatch(fetchDeletepostSuccess(id)))
    .catch(error => dispatch(fetchDeletepostFailed(error)));
}}