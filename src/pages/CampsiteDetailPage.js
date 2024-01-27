import { Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams(); // destructure campsiteId property from the object returned by useParams() hook (will return a string)
    const campsite = selectCampsiteById(campsiteId); // once the campsiteId is changed, react will force the component to re-render and the selectedCampsite will be updated

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;

// inside the row we are rendering the CampsiteDetail component
// the CampsiteDetail component expects a campsite object as a prop
// this gives the CampsiteDetail component access to the campsite object