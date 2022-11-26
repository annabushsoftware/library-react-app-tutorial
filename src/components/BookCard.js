import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function BookCard(props) {
    return (
        <Container>
            <Card
                body
                bg="primary"
                text="dark">
                {props.title}
            </Card>
        </Container>
    )
}

export default BookCard;
