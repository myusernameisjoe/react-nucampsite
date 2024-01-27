import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/directory'>Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;

// when we render the SubHeader component from other components, we will pass in the current and detail props
// we destructure both props from the props object in the parameter list

// conditional rendering (using && operator)
// can be used inline without an if statement
// performs short-circuit evaluation
    // if the first operand is truthy, then the second operand is evaluated
    // if the first operand is falsy, then the second operand is not evaluated

// compare detail breadcrumb item to the home breadcrumb item

