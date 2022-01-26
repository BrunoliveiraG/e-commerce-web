import { Col, Row, Badge } from 'react-bootstrap';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import MainComponent from '../../components/shared/MainComponent';

import styles from '../../styles/Product.module.css';

import BlueBackground from '../../components/shared/BlueBackground';
import StyledButton from '../../components/shared/StyledButton';

import useSwr from 'swr';
import { useRouter } from 'next/router';
import ProductShowService from '../../services/productShow';

import { toast } from 'react-toastify';
import { format, parseJSON } from 'date-fns';

const Product: React.FC = () => {
  const router = useRouter();
  const { data, error } = useSwr(`/storefront/v1/products/${router?.query?.id}`, ProductShowService.show);

  if (error) {
    toast.error('Error retrieving product');
    console.log(error);
  }

  return (
    <MainComponent>
      <Row className="mt-4 mb-4">
        <Col md={6}>
          <img
            className="w-100"
            src={data?.image_url}
            alt={data?.name}
          />

          <div className="mt-3">
            <h6 className={styles.subtitle}>About the game</h6>

            <p>
              Quia hic dolores voluptate aspernatur dolorem iste aut voluptas. Laudantium earum vitae quae nobis ut. Eum dolorum qui quam numquam odit eius.
              Voluptas autem animi nihil. Nihil qui labore ipsum optio tempora impedit. Enim commodi ut voluptate maxime et eos exercitationem blanditiis ut.
              Repellat eaque vel voluptas suscipit voluptatem adipisci quasi qui nesciunt. Optio illo qui enim. Mollitia laborum unde. Cupiditate voluptatem ducimus nam voluptatibus eum. Aut delectus sit et.
            </p>

            <ul className={styles.list}>
              <li>
                <strong>Developer: </strong>
                <span>{data?.developer}</span>
              </li>

              <li>
                <strong>Mode: </strong>
                <span>{data?.mode}</span>
              </li>

              <li>
                <strong>Status: </strong>
                <span>{data?.status === 'available' ? 'Available' : 'Indisponível'}</span>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6}>
          <BlueBackground>
            <Row className="mb-4">
              <Col>
                <h1 className={styles.title}>{data?.name}</h1>

                <div>
                  {
                    data?.categories?.map(
                      category =>
                        <Badge
                          variant="primary ms-1"
                          className={styles.primary_badge}
                        >
                          {category.name}
                        </Badge>
                    )
                  }
                </div>
              </Col>

              <Col>
                <strong className="float-right">{`$ ${data?.price}`}</strong>
              </Col>
            </Row>

            <Row className={styles.mb_50}>
              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>Released</Badge>
                <p>
                  {
                    data?.release_date &&
                    format(parseJSON(data.release_date), 'dd/MM/yyyy')
                  }
                </p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>Sold</Badge>
                <p>{data?.sells_count}</p>
              </Col>

              <Col>
                <Badge variant="primary" className={styles.secondary_badge}>Wish Listed</Badge>
                <p>{data?.wishlist_count}</p>
              </Col>
            </Row>

            <hr className={styles.line}/>

            <Row className="mt-4 text-center">
              <Col>
                <StyledButton className={styles.gray_button} icon={faHeart} action="wishlist" type_button="red" />
              </Col>

              <Col>
                <StyledButton icon={faCartPlus} action="Buy" type_button="blue" />
              </Col>
            </Row>
          </BlueBackground>

          <div className="mt-4">
            <BlueBackground>
              <strong>System requirements</strong>

              <div className="mt-3">
                <ul className={styles.list}>
                  <li>
                    <strong>OS:</strong>
                    <span>{data?.system_requirement.operating_system}</span>
                  </li>

                  <li>
                    <strong>Storage:</strong>
                    <span>{data?.system_requirement.storage}</span>
                  </li>

                  <li>
                    <strong>Processor:</strong>
                    <span>{data?.system_requirement.processor}</span>
                  </li>

                  <li>
                    <strong>Memory:</strong>
                    <span>{data?.system_requirement.memory}</span>
                  </li>

                  <li>
                    <strong>Graphics card:</strong>
                    <span>{data?.system_requirement.graphics_card}</span>
                  </li>
                </ul>
              </div>
            </BlueBackground>
          </div>
        </Col>
      </Row>
    </MainComponent>
  );
}

export default Product;