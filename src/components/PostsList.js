import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchPostsList } from '../api/posts-list'
import { fetchDeleteList } from '../api/delete-post'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';


const PostsList = ({postList, fetchPostsList, fetchDeleteList}) => {

    useEffect(() => {
        fetchPostsList();
    },[fetchPostsList])
    console.log(postList)
    return (
        <ListGroup className="mt-4">
         {postList.loading && <span>Loading...</span>}
         {postList.posts.map((post) => (
            <ListGroupItem className="d-flex" key={post.id}>
            <Link to={`/posts/${post.id}`}><strong>{post.title}</strong></Link>
            <div className="ml-auto">
                <Link to={`/edit/${post.id}`} className="btn btn-warning mr-1">Edit</Link>
                <Button color="danger"  onClick={() => fetchDeleteList(post.id)}>Delete</Button>
            </div>
            </ListGroupItem>
            ))}
        </ListGroup> 
    )
}

const mapStateToProps = state => {
    return {postList: state.postList}     
}
  
  const mapDispatchToProps = dispatch => ({
    fetchPostsList: () => {dispatch(fetchPostsList())},
    fetchDeleteList: (id) => {dispatch(fetchDeleteList(id))}
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
