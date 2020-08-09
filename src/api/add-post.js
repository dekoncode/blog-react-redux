import { fetchAddpostStart, fetchAddpostSuccess, fetchAddpostFailed } from "../actions/actions";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export function fetchAddPost(body) {
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

dispatch(fetchAddpostStart());

fetch("https://bloggy-api.herokuapp.com/posts", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);dispatch(fetchAddpostSuccess(result));})
  .catch(error => {dispatch(fetchAddpostFailed(error)); console.log(error)})

}}