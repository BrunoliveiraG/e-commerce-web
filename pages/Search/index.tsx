import MainComponent from '../../components/shared/MainComponent';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Search.module.css';

const Search: React.FC = () => {
  const handleSearch = () => {}

  return (
    <MainComponent>
      <div>
        <div className="text-center mt-4">
          <h3 className={styles.title}>
            Search results
          </h3>
        </div>

        <Row className="text-center col-md-6 offset-md-3">
          <Col xs={10}>
            <InputGroup>
              <FormControl placeholder="search"/>
            </InputGroup>
          </Col>

          <Col xs={2}>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className={styles.search_icon}
              onClick={handleSearch}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={6} xs={12} className={styles.results}>
            <span>
              16 result(s)
            </span>
          </Col>

          <Col sm={6} xs={12}>
            <div className={styles.ordination}>
              <strong className="me-3">Sort by:</strong>
              <select className={styles.secondary}>
                <option value="price-asc">Cheapest</option>
                <option value="price-desc">Most expensive</option>
                <option value="release_date-asc">Latest releases</option>
                <option value="release_date-desc">Oldest releases</option>
              </select>
            </div>
          </Col>
        </Row>

        <div>
          <select className={styles.primary}>
            <option>Category</option>
            <option>1</option>
            <option>2</option>
          </select>

          <select className={styles.primary}>
            <option>Price</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="mt-4">
          <h5>
            Showing results for Resident Evil 2
          </h5>
        </div>
      </div>


    </MainComponent>
  );
}

export default Search;