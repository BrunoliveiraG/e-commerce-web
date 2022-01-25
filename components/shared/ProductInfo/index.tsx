import {Button} from "react-bootstrap";
import styles from '../../../styles/ProductInfo.module.css';

interface HighlightedButtonProps {
  type: string;
}

const ProductInfo: React.FC<HighlightedButtonProps> = ({ type = 'normal' }) => {
  return (
    <div className={styles.product}>
      <div>
        <img
          src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
          alt ="Product Game"
          className={styles.image}
          />
      </div>

      <div className={styles.product_details}>
        <div>
          <p>
            God of War
          </p>
          <p>
            Playstation 4
          </p>
        </div>

        <div className={styles.button}>
          <Button
            className={
              `${(type === 'highlighted' ? 'btn btn-info' : styles.normal_button)}`
            }
          >
            $19,99
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;