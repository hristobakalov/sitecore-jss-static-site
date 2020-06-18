import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Row, Col } from 'reactstrap';

const TwoColumn = ({route, rendering}) => (
  <Row>
    <Col xs="6" style={columnStyle}>
      <Placeholder 
        name="jss-left-column" 
        rendering={rendering} 
        route={route}/>
    </Col>
    <Col xs="6" style={columnStyle}>
      <Placeholder 
        name="jss-right-column" 
        rendering={rendering} 
        route={route}/>
    </Col>
  </Row>
);

const columnStyle= {
  backgroundColor: '#E5EDF5',
  border: '1px solid #C9C1D5',
  color: '#5F5F5F',
  padding: '1rem',
  marginTop: '1rem'
}
export default TwoColumn;
