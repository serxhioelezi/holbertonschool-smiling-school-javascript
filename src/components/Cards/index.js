import { Container, Row, Col, Card } from "react-bootstrap";
import videos from "../../mockdata/videos";
import { IoStarSharp } from "react-icons/io5";

import "./index.css";

const BasicExample = () => {
  console.log("videos----", videos);

  return (
    <>
      <Container>
        <Row>
          {videos.map((video, index) => {
            return (
              <Col md={3} key={index}>
                <Card className="custom-card">
                  <Card.Img
                    variant="top"
                    src={`${video.video_poster}`}
                    className="custom-image"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">{video.user_quote}</Card.Title>
                    <Card.Text className="text-muted">{video.paragraph}</Card.Text>
                    <div className="user-data">
                      <Card.Img
                        variant="top"
                        src={`${video.user_image}`}
                        className="user-image"
                      />
                      <span>{video.username}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1 mt-3">
                      {video.rating.map((el, i) => {
                        return <IoStarSharp key={i} className="star" />;
                      })}
                      <h3 className="video-minutes">{video.minutes}</h3>
                    </div>
                    
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BasicExample;