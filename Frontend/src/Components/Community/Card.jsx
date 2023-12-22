import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const CustomCard = (props) => {
  const { username, profilePicSrc, date, description, imageSrc } = props;

  return (
    <div>
      <Card style={{ width: '34rem', height: '37rem', padding: '1rem' }} className='container d-flex'>
        <Card.Body className='d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <Card.Img
              src={profilePicSrc}
              style={{ width: '40px', borderRadius: '50%', marginBottom: '1rem', marginRight: '1rem' }}
            />
            <div>
              <Card.Title className='mb-0'>{username}</Card.Title>
              <Card.Text className='text-muted' style={{ fontSize: '0.8rem', paddingBottom: '1rem' }}>{date}</Card.Text>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" style={{ marginLeft: 'auto' }}>
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </Card.Body>
        <Card.Body style={{ marginTop: '-1rem' }}>
          <Card.Text>{description}</Card.Text>
          <div style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '1rem' }}>
            <Card.Img
              variant="top"
              src={imageSrc}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </Card.Body>
        <hr className="my-2" style={{ borderColor: 'lightgray' }} />
        <Card.Body className='d-flex flex-column'>
          <div className='d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <span className='mx-2' style={{ marginTop: '-2px' }}>12 Likes</span>
            <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="dark-grey" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            <span className='mx-2' style={{ marginTop: '-2px' }}>8 Comments</span>
          </div>
          <hr className="my-2" style={{ borderColor: 'lightgray' }} />
          <div className='mt-3'>
            <FloatingLabel controlId="commentInput" label="Write a comment" className='text-muted'>
              <Form.Control type="text" placeholder="Type your comment here..." />
            </FloatingLabel>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

CustomCard.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CustomCard;
