import React from 'react';
import MainComponent from "../components/shared/MainComponent";
import { useRouter } from "next/router";
import HighlightedProducts from "../components/Storefront/HighlightedProducts";
import {Carousel} from "react-bootstrap";
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <h1>Home</h1>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <HighlightedProducts title="Week deals" type="highlighted"/>
      <HighlightedProducts title="Releases" />
      <HighlightedProducts title="Most popular" />
    </MainComponent>
  )
}

export default Home;