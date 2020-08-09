import { fetchPostlistStart, fetchPostlistSuccess, fetchPostlistFailed } from "../actions/actions";

export function fetchPostsList() {
    return (dispatch) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

dispatch(fetchPostlistStart());

fetch("https://bloggy-api.herokuapp.com/posts", requestOptions)
  .then(response => response.json())
  .then(result => dispatch(fetchPostlistSuccess(result)))
  .catch(error => dispatch(fetchPostlistFailed(error)));
    }
}