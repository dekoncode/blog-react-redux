import { fetchEditpostStart, fetchEditpostSuccess, fetchEditpostFailed } from "../actions/actions";

export function fetchEditPost(body) {
    return (dispatch) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(body);

        const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        dispatch(fetchEditpostStart())

        fetch("https://bloggy-api.herokuapp.com/posts/1", requestOptions)
        .then(response => response.text())
        .then(result => fetchEditpostSuccess(result))
        .catch(error => fetchEditpostFailed(error));
            }
}