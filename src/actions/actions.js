// POSTLIST
export const FETCH_POSTLIST_START = 'FETCH_POSTLIST_START';
export function fetchPostlistStart() {
    return {
      type: FETCH_POSTLIST_START
    }
  }
export const FETCH_POSTLIST_FAILED = 'FETCH_POSTLIST_FAILED';
export function fetchPostlistFailed(error) {
    return {
      type: FETCH_POSTLIST_FAILED,
      error
    }
  }
export const FETCH_POSTLIST_SUCCESS = 'FETCH_POSTLIST_SUCCESS';
export function fetchPostlistSuccess(posts) {
    return {
      type: FETCH_POSTLIST_SUCCESS,
      posts
    }
  }

// ADDPOST
export const FETCH_ADDPOST_START = 'FETCH_ADDPOST_START';
export function fetchAddpostStart() {
    return {
    type: FETCH_ADDPOST_START
    }
}
export const FETCH_ADDPOST_FAILED = 'FETCH_ADDPOST_FAILED';
export function fetchAddpostFailed(error) {
    return {
    type: FETCH_ADDPOST_FAILED,
    error
    }
}
export const FETCH_ADDPOST_SUCCESS = 'FETCH_ADDPOST_SUCCESS';
export function fetchAddpostSuccess(post) {
    return {
    type: FETCH_ADDPOST_SUCCESS,
    post
    }
}

// DELETEPOST
export const FETCH_DELETEPOST_START = 'FETCH_DELETEPOST_START';
export function fetchDeletepostStart() {
    return {
    type: FETCH_DELETEPOST_START
    }
}
export const FETCH_DELETEPOST_FAILED = 'FETCH_DELETEPOST_FAILED';
export function fetchDeletepostFailed(error) {
    return {
    type: FETCH_DELETEPOST_FAILED,
    error
    }
}
export const FETCH_DELETEPOST_SUCCESS = 'FETCH_DELETEPOST_SUCCESS';
export function fetchDeletepostSuccess(id) {
    return {
    type: FETCH_DELETEPOST_SUCCESS,
    id
    }
}

//EDITPOST
export const FETCH_EDITPOST_START = 'FETCH_EDITPOST_START';
export function fetchEditpostStart() {
    return {
    type: FETCH_EDITPOST_START
    }
}
export const FETCH_EDITPOST_FAILED = 'FETCH_EDITPOST_FAILED';
export function fetchEditpostFailed(error) {
    return {
    type: FETCH_EDITPOST_FAILED,
    error
    }
}
export const FETCH_EDITPOST_SUCCESS = 'FETCH_EDITPOST_SUCCESS';
export function fetchEditpostSuccess(id) {
    return {
    type: FETCH_EDITPOST_SUCCESS,
    id
    }
}
//GET_POST_BY_ID
export const GET_POST_BY_ID_START = 'GET_POST_BY_ID_START';
export function fetchGetPostByIdStart() {
    return {
    type: GET_POST_BY_ID_START
    }
}
export const GET_POST_BY_ID_SUCCESS = 'GET_POST_BY_ID_SUCCESS';
export function fetchGetPostByIdSuccess(post) {
    return {
    type: GET_POST_BY_ID_SUCCESS,
    post
    }
}
export const GET_POST_BY_ID_FAILED = 'GET_POST_BY_ID_FAILED';
export function fetchGetPostByIdFailed(error) {
    return {
    type: GET_POST_BY_ID_FAILED,
    error
    }
}

//ADD_COMMENTS
export const ADD_COMMENTS_START = 'ADD_COMMENTS_START';
export function fetchAddCommentsStart() {
    return {
    type: GET_POST_BY_ID_START
    }
}
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export function fetchAddCommentsSuccess(comment) {
    return {
    type: ADD_COMMENTS_SUCCESS,
    comment
    }
}
export const ADD_COMMENTS_FAILED = 'ADD_COMMENTS_FAILED';
export function fetchAddCommentsFailed(error) {
    return {
    type: ADD_COMMENTS_FAILED,
    error
    }
}
