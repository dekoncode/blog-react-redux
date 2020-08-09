import React, { useEffect, useState, Fragment } from 'react';
import { Header } from './Header'
import { connect } from 'react-redux'
import { fetchGetPost } from '../api/get-post'
import { fetchAddComment } from '../api/add-comment'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Form,
    Input
} from 'reactstrap'

const ViewPost = ({currentPost, match, fetchGetPost, fetchAddComment}) => {
    
    const [comment, setComment] = useState('')

    useEffect(() => {
        fetchGetPost(match.params.id, true)
    },[fetchGetPost, match])

    const onSubmit = (e) => {
        e.preventDefault();
        fetchAddComment({body: comment, postId: currentPost.post.id});
        setComment('')
    }

    const onChange = (e) => {
        setComment(e.target.value)
    }
    
    return (
        <div>
            {currentPost.loading && 'Loading...' }
            {currentPost.post && (
                <Fragment>
                <Header />
                <Container>
                    <h1>{currentPost.post.title}</h1>
                    <p>{currentPost.post.body}</p>
                </Container>
                <Container>
                <ListGroup>
                {
                currentPost.post.comments &&
                currentPost.post.comments.map((comment) => (    
                        <ListGroupItem key={comment.id}>
                            <p>{comment.body}</p>
                        </ListGroupItem>    
                ))}
                </ListGroup>   
                    <Form onSubmit={onSubmit}>
                    <Input onChange={onChange} value={comment}></Input>
                    <Button> New comment</Button>
                    </Form>
                </Container>
                </Fragment>
            )}
        </div>
    )
}


const mapStateToProps = (state) => ({currentPost: state.currentPost});
const mapDispatchToProps = dispatch => ({
    fetchGetPost: (id, isComment) => {dispatch(fetchGetPost(id, isComment))},
    fetchAddComment: (body) => {dispatch(fetchAddComment(body))}
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ViewPost)
