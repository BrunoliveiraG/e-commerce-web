import React from 'react';
import MainComponent from "../components/shared/MainComponent";
import HighlightedProducts from "../components/Storefront/HighlightedProducts";
import {Carousel} from "react-bootstrap";
import styles from '../styles/Home.module.css';
import useSwr from 'swr';
import HomeService from "../services/home";
import {toast} from "react-toastify";


const Home: React.FC = () => {
  const { data, error } = useSwr('/storefront/v1/home', HomeService.index);
  const { featured, latest_releases, cheapest } = { ...data };

  if (error) {
    toast.error('Error obtaining home data!');
    console.log(error);
  }

  return (
    <MainComponent>
      <Carousel className={styles.carousel}>
        {
          featured?.slice(0, 3)?.map(
            product => (
              <Carousel.Item key={product.id}>
                <img
                  className={`d-block w-100 ${styles.carousel_image}`}
                  src={product.image_url}
                  alt={product.name}
                />
              </Carousel.Item>
            )
          )
        }
      </Carousel>

      <HighlightedProducts
        title="Weekly deals"
        type="highlighted"
        products={cheapest}
      />

      <HighlightedProducts
        title="Releases"
        products={latest_releases}
      />

      <HighlightedProducts
        title="Popular"
        products={featured}
      />
    </MainComponent>
  )
}

export default Home;