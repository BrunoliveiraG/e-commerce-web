import api from './api';

import ProductHome from "../dtos/ProductHome";

interface HomeIndexData {
  featured: ProductHome[];
  'latest_releases': ProductHome[];
  cheapest: ProductHome[];
}

const HomeService = {
  index: (url: string) => {
    return api.get<HomeIndexData>(url).then(response => response.data);
  }
}

export default HomeService;