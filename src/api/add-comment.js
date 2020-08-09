import { fetchAddCommentsStart, fetchAddCommentsSuccess, fetchAddCommentsFailed } from "../actions/actions";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export function fetchAddComment(body) {
    return (dispatch) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(body);
        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        dispatch(fetchAddCommentsStart());

        fetch("https://bloggy-api.herokuapp.com/comments", requestOptions)
        .then(response => response.json())
        .then(result => {dispatch(fetchAddCommentsSuccess(result))})
        .catch(error => {dispatch(fetchAddCommentsFailed(error))})

}}