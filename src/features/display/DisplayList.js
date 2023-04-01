import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeatureCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeatureCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;