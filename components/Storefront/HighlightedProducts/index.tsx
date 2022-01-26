import { Row, Col, Button } from 'react-bootstrap';
import styles from '../../../styles/HighlightedProducts.module.css';
import ProductInfo from '../../shared/ProductInfo';
import ProductHome from "../../../dtos/ProductHome";

interface HighlightedProductsProps {
  title: string;
  type?: string;
  products: ProductHome[];
  handleSeeMore(event: React.MouseEvent<HTMLElement>): void;
}

const HighlightedProducts: React.FC<HighlightedProductsProps> = ({ title, type, products, handleSeeMore }) => {
  return (
    <div className={styles.products}>
      <div className={styles.products_header}>
        <h5>{title}</h5>

        <hr className={styles.line} />

        <Button
          onClick={handleSeeMore}
          className={
            `${type === 'highlighted' ? styles.highlighted_button : styles.normal_button}`
          }
        >
          See More
        </Button>
      </div>

      <Row>
        {
          products?.map(
            product => (
              <Col md={3} key={product.id}>
                <ProductInfo
                  type={type}
                  product={product}
                />
              </Col>
            )
          )
        }
      </Row>
    </div>
  )
}

export default HighlightedProducts;