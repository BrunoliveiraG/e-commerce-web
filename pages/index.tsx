import React from 'react';
import MainComponent from "../components/shared/MainComponent";
import HighlightedProducts from "../components/Storefront/HighlightedProducts";
import {Carousel} from "react-bootstrap";
import styles from '../styles/Home.module.css';
import useSwr from 'swr';
import HomeService from "../services/home";
import {toast} from "react-toastify";
import {useRouter} from "next/router";


const Home: React.FC = () => {
  const { data, error } = useSwr('/storefront/v1/home', HomeService.index);
  const { featured, latest_releases, cheapest } = { ...data };
  const router = useRouter();

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
              <Carousel.Item
                key={product.id}
                onClick={() => router.push(`/Product/${product.id}`)}
                className={styles.carousel_item}
              >
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
        handleSeeMore={
          () => router.push({
            pathname: '/Search',
            query: {
              order: 'price',
              direction: 'asc'
            }
          })
        }
      />

      <HighlightedProducts
        title="Releases"
        products={latest_releases}
        handleSeeMore={
          () => router.push({
            pathname: '/Search',
            query: {
              order: 'release_date',
              direction: 'desc'
            }
          })
        }
      />

      <HighlightedProducts
        title="Popular"
        products={featured}
        handleSeeMore={
          () => router.push({
            pathname: '/Search',
          })
        }
      />
    </MainComponent>
  )
}

export default Home;