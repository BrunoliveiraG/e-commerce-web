import React from 'react';
import MainComponent from "../components/shared/MainComponent";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import ProductInfo from "../components/shared/ProductInfo";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <h1>Home</h1>
      <ProductInfo />
      <ProductInfo type="highlighted"/>
    </MainComponent>
  )
}

export default Home;