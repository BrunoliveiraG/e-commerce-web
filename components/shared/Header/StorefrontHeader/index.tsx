import {useState} from 'react';
import React from "react";
import styles from '../../../../styles/Header.module.css';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Logo'
import Link from "next/link";
import ProductSearchService from "../../../../util/ProductSearchService";
import {useRouter} from "next/router";


const StorefrontHeader: React.FC = () => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSearch = (): void => {
    router.push(`
      /Search${ProductSearchService.execute({ search })}
    `);
  }

  return (
    <Row className={styles.background}>
      <Col md={6} className="mt-2">
        <Logo />
      </Col>

      <Col md={6} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup
              className={`${router.pathname === '/Search' ? styles.hidden: ''}`}
            >
              <FormControl
                placeholder="Search product"
                className={styles.input}
                value={search}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(evt.target.value)
                }
                onKeyUp={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLowerCase() === 'enter') {
                      handleSearch();
                    }
                  }
                }
              />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col className={`${router.pathname === '/Search' ? styles.hidden: ''}`}>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="var(--color-gray-light)"
                  onClick={handleSearch}
                />
              </Col>

              <Col>
                <FontAwesomeIcon icon={faShoppingCart} color="var(--color-gray-light)" />
              </Col>

              <Col>
                <Link href="/Auth/Login">
                  <a>
                    <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StorefrontHeader;