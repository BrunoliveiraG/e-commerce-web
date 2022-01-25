import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminHeader from '../Header/AdminHeader';
import AdminFooter from "../Footer/AdminFooter";
import LateralMenu from '../LateralMenu';

const AdminComponent: React.FC = ({children}) => {
  return(
    <>
      <Row className="me-lg-4">
        <Col lg={3}>
          <LateralMenu />
        </Col>

        <Col lg={9}>
          <div className="d-flex flex-column sticky-footer-wrapper container">
            <AdminHeader name="Username" />
            <div className="flex-fill text-center">
              { children }
            </div>
            <AdminFooter />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AdminComponent;