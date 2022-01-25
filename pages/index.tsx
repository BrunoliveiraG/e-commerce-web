import React from 'react';
import MainComponent from "../components/shared/MainComponent";
import { useRouter } from "next/router";
import ProductInfo from "../components/shared/ProductInfo";
import HighlightedProducts from "../components/Storefront/HighlightedProducts";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <h1>Home</h1>
      <HighlightedProducts title="On Sale" />
      <HighlightedProducts title="Highlighted" type="highlighted"/>
    </MainComponent>
  )
}

export default Home;