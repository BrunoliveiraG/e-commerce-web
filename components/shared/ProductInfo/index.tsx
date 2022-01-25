import {Button} from "react-bootstrap";
import styles from '../../../styles/ProductInfo.module.css';
import ProductHome from "../../../dtos/ProductHome";


interface ProductInfoProps {
  type?: string;
  product: ProductHome;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ type = 'normal', product }) => {
  return (
    <div className={styles.product}>
      <div>
        <img
          src={product.image_url}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <div className={styles.product_info}>
        <div>
          <p>
            {product.name}
          </p>
          <p>
            {product.description.slice(0, 26) + '...'}
          </p>
        </div>

        <div className={styles.button}>
          <Button
            className={
              `${(type === 'highlighted' ? 'btn btn-info' : styles.normal_button)}`
            }
          >
            { `$ ${product.price}` }
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;