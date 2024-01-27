import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';


const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite; // destructuring
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name}/> 
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default CampsiteCard;

// code destructured

// const CampsiteCard = ({ campsite }) => {
    // in this line we are defining the CapsiteCard component as a functional component
    // this functional component takes in a single parameter (campsite) and returns JSX

// const { image, name } = campsite;
    // destructuring two create two new variables (image and name) from the campsite object









    
// code not destructured
/*

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

*/
