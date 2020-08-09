import React, { useState} from 'react';
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { fetchAddPost } from '../api/add-post'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const AddPost = ({fetchAddPost}) => {
    const history = useHistory();
    const [body, setBody] = useState(null);
    const [title, setTitle] = useState(null);
    
    const onSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            body,
            title
        }
        fetchAddPost(newPost);
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
                <Input type="text" placeholder="Enter the title" onChange={titleChange} value={title}></Input>
                <Input type="text" placeholder="Enter the text" onChange={textChange}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => ({
    fetchAddPost: (newPost) => {dispatch(fetchAddPost(newPost))}
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)