import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';


const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                        return (
                            <Col
                                md='5'
                                className='m-4'
                                key={campsite.id}
                            >    
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    })}
        </Row>

    );
};

export default CampsitesList;

// using slices and selectors to manage state

    // added import { selectAllCampsites } from './campsitesSlice';

    // added const campsites = selectAllCampsites();

    // {campsites.map((campsite) => {
         // changed CAMPSITES to campsites (which is the selector function that returns the entire array of campsites)

    // removed import { CAMPSITES } from '../../app/shared/CAMPSITES';
        // i love that





// old
/*
import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";


const CampsitesList = () => {
    return (
        <Row className='ms-auto'>
            {CAMPSITES.map((campsite) => {
                        return (
                            <Col md='5' className='m-4' key={campsite.id}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    })}
        </Row>

    );
};

export default CampsitesList;

// curley braces inside JSX are used to evaluate JS expressions

// .map()
// is a more declarative way of writing a loop
// itterate over all the objects in the CAMPSITES array with a variable called campsite
// render a component (CampsiteCard) for each object in the array
// each newly rendered CampsiteCard component will have a prop called campsite


// <Col md='5' className='m-4' key={campsite.id}>
// give the col comoponent different props (md, className, key)
// key={campsite.id} is a unique identifier for each campsite
// {campsite.id}
// accessing each id property because of the campsites array (from CAMPSITES.js) has objects with id properties

// overall
// created multiple CampsiteCard components within the Col component within the Row component within the CampsitesList component

// Modularity
// by importing the Campsites array only in CampsitesList.js, we are making each component responsibile for its own data and dependencies
// each component is self-contained and manages its own resources

// abstraction
// app.js does not need to know how the CampsitesList component works
// it only needs to know that it exists and how to render it
// having app.js be clean and simple makes it easier to maintain and update and less of a clusterfuck
*/
