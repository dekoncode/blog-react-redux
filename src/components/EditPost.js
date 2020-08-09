import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { fetchEditPost } from '../api/edit-post';
import { fetchGetPost } from '../api/get-post'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const EditPost = ({fetchEditPost, match, currentPost, fetchGetPost}) => {

    const history = useHistory();
    const [body, setBody] = useState(currentPost.post ? currentPost.post.body : '');
    const [title, setTitle] = useState(currentPost.post ? currentPost.post.title : '');
    
    useEffect(() => {
        fetchGetPost(match.params.id)
    },[fetchGetPost, match])
    
    const onSubmit = (event) => {
        event.preventDefault();
        const updatedPost = {
            body,
            title,
            id: currentPost.post.id
        }
        fetchEditPost(updatedPost);
        history.push('/');
    }

    const textChange = (e) => {
        setBody(e.target.value);
    }

    const titleChange = (e) => {
        setTitle(e.target.value);
    }


    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name:</Label>
                <Input type="text" placeholder="Enter the shit" onChange={titleChange} value={title}></Input>
                <Input type="text" placeholder="Enter the text" onChange={textChange} value={body}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

const mapStateToProps = (state) => ({currentPost: state.currentPost});
const mapDispatchToProps = dispatch => ({
    fetchEditPost: (updPost) => {dispatch(fetchEditPost(updPost))},
    fetchGetPost: (id) => {dispatch(fetchGetPost(id))}
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(EditPost)