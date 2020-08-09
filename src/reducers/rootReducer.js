import {FETCH_POSTLIST_START, FETCH_POSTLIST_SUCCESS, FETCH_POSTLIST_FAILED} from '../actions/actions'
import {FETCH_ADDPOST_START, FETCH_ADDPOST_FAILED, FETCH_ADDPOST_SUCCESS} from '../actions/actions'
import {FETCH_DELETEPOST_START, FETCH_DELETEPOST_FAILED, FETCH_DELETEPOST_SUCCESS} from '../actions/actions'
import {FETCH_EDITPOST_START, FETCH_EDITPOST_FAILED, FETCH_EDITPOST_SUCCESS} from '../actions/actions'
import {GET_POST_BY_ID_START, GET_POST_BY_ID_FAILED, GET_POST_BY_ID_SUCCESS} from '../actions/actions'
import {ADD_COMMENTS_START, ADD_COMMENTS_FAILED, ADD_COMMENTS_SUCCESS} from '../actions/actions'
const initialState = {
    postList: {
        loading: false,
        error: null,
        posts: []
    },
    currentPost: {
        loading: false,
        error: null,
        post: null
    }

}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTLIST_START :
            return {
                ...state,
                postList: {...state.postList, loading: true},
            }
        case FETCH_POSTLIST_SUCCESS :
            return {
                ...state,
                postList: {...state.postList, loading: false, posts: action.posts},
            }
        case FETCH_POSTLIST_FAILED :
            return {
                ...state,
                postList: {...state.postList, loading: false, error: action.error},
            }
            //add post
        case FETCH_ADDPOST_START :
            return {
                ...state,
                postList: {...state.postList, loading: true},
            }
        case FETCH_ADDPOST_SUCCESS :
            return {
                ...state,
                postList: {...state.postList, loading: false, posts: [...state.postList.posts, action.post]},
            }
        case FETCH_ADDPOST_FAILED :
            return {
                ...state,
                postList: {...state.postList, loading: false, error: action.error},
            }
            //delete post
        case FETCH_DELETEPOST_START :
            return {
                ...state,
                postList: {...state.postList, loading: true},
            }
        case FETCH_DELETEPOST_SUCCESS :
            return {
                ...state,
                postList: {...state.postList, loading: false, posts: state.postList.posts.filter((post) => {
                    return post.id !== action.id})},
            }
        case FETCH_DELETEPOST_FAILED :
            return {
                ...state,
                postList: {...state.postList, loading: false, error: action.error},
            }
            //edit post
        case FETCH_EDITPOST_START :
            return {
                ...state,
                postList: {...state.postList, loading: true},
            }
        case FETCH_EDITPOST_SUCCESS :
            const updatePost = action.post;
            const updatePosts = state.postList.posts.map(user => {
                if(user.id === updatePost.id) {
                    return updatePost;
                }
                return user;
            })
            return {
                ...state,
                postList: {...state.postList, loading: false, posts: updatePosts}
            }
        case FETCH_EDITPOST_FAILED :
            return {
                ...state,
                postList: {...state.postList, loading: false, error: action.error},
            }
            //get post
        case GET_POST_BY_ID_START :
            return {
                ...state,
                currentPost: {...state.currentPost, loading: true},
            }
        case GET_POST_BY_ID_SUCCESS :
            return {
                ...state,
                currentPost: {...state.currentPost, loading: false, post: action.post}
            }
        case GET_POST_BY_ID_FAILED :
            return {
                ...state,
                currentPost: {...state.currentPost, loading: false, error: action.error},
            }
            //add comment
        case ADD_COMMENTS_START :
            return {
                ...state,
                currentPost: {...state.currentPost, loading: true},
            }
        case ADD_COMMENTS_SUCCESS :
            const addComment = {
                ...state,
                currentPost: {...state.currentPost, loading: false, post: {...state.currentPost.post, comments: [...state.currentPost.post.comments, action.comment]}}
            }
            console.log(addComment)
            return addComment;
        case ADD_COMMENTS_FAILED :
            return {
                ...state,
                currentPost: {...state.currentPost, loading: false, error: action.error},
            }     
        default:
            return state;
    }
}