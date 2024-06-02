import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import PostFormUpdate from '../form/update';


const PostCard = ({ title, body, postId}) => {
  
  return (
    <Card bg="dark" text="white" className="mb-3" style={{minHeight: "300px"}} >
      <PostFormUpdate pId={postId} pTitle={title} pBody={body} />
      <Card.Body>
        <Card.Title>
          {(title.length > 20) ? title.substring(0, 50) + '....' : title}
        </Card.Title>
        <Card.Text>
          {(body.length > 100) ? body.substring(0,100) + '....' : body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
};

export default PostCard;