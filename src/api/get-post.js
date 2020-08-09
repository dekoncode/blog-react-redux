import { fetchGetPostByIdStart, fetchGetPostByIdSuccess, fetchGetPostByIdFailed } from "../actions/actions";

export function fetchGetPost(id, isComments) {
    return (dispatch) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

dispatch(fetchGetPostByIdStart());

fetch("https://bloggy-api.herokuapp.com/posts/" + id + (isComments ? '?_embed=comments' : ''), requestOptions)
  .then(response => response.json())
  .then(result => dispatch(fetchGetPostByIdSuccess(result)))
  .catch(error => dispatch(fetchGetPostByIdFailed(error)));
    }
}