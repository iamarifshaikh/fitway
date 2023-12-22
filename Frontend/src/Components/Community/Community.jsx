import React, { useState } from 'react';
import CustomCard from "./Card";
import Navbar from '../Navbar/Navbar';
import UserList from './UserList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Community = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {

    console.log('Posted:', postContent);

    setPostContent('');
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <UserList />
          </div>

          <div className="col-md-9">
            <Form className="mb-3" style={{ marginLeft: '6rem' }}>
              <div className="d-flex">
                <Form.Group controlId="exampleForm.ControlInput1" className="mr-2">
                  <Form.Label>Enter your community post</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Write something good :)"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" style={{ marginTop: "2rem" }} className="mb-3 mr-3">
                  <Form.Control type="file" />
                </Form.Group>
                <Button
                  variant="primary"
                  style={{ height: '2rem', marginTop: '2rem' }}
                  onClick={handlePost}
                >
                  Post
                </Button>
              </div>
            </Form>
            <CustomCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
