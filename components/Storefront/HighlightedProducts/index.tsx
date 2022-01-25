import { Row, Col } from 'react-bootstrap';
import StyledButton from '../../shared/StyledButton';
import Link from 'next/link';
import styles from '../../../styles/HighlightedProducts.module.css';
import ProductInfo from '../../shared/ProductInfo';

interface HighlightedProductsProps {
  title: string;
  type?: string;
}

const HighlightedProducts: React.FC<HighlightedProductsProps> = ({ title, type }) => {
  return (
    <div className={styles.products}>
      <div className={styles.products_header}>
        <h5>{title}</h5>

        <hr className={styles.line} />

        <Link href="#">
          <a>
            <StyledButton action="See more" type_button="blue" />
          </a>
        </Link>
      </div>

      <Row>
        <Col md={3}>
          <ProductInfo type={type} />
        </Col>

        <Col md={3}>
          <ProductInfo type={type} />
        </Col>

        <Col md={3}>
          <ProductInfo type={type} />
        </Col>

        <Col md={3}>
          <ProductInfo type={type} />
        </Col>
      </Row>
    </div>
  )
}

export default HighlightedProducts;