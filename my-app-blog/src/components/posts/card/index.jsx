import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

const PostCard = ({ title, body, userId }) => {
  return (
    <Card bg="dark" text="white" className="mb-3" >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Card.Text className="text-muted">User: {userId}</Card.Text>
      </Card.Body>
    </Card>
  );
};


PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default PostCard;