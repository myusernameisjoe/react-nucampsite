import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'; // importing components from reactstrap library


const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            /> 
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
                

        </Card>
    );
};

export default CampsiteCard;


// define a functional component (CampsiteInfo)
// CampsiteInfo returns JSX
// <card></card> is a component
// <cardImg/> is a component with a self-closing tag
// becuase we export CampsiteCard as a default, we can import it into App.js without using curly braces