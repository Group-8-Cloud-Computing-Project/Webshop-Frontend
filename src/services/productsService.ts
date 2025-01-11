// import apiClient from './api';
import { Product } from '../types/Product';

export const getProducts = (): Product[] => {
    return [
        { id: 1, name: "iPhone" },
        { id: 2, name: "Google Pixel" }
    ];
};

// export const getProducts = async (): Promise<Product[]> => {
//     const response = await apiClient.get('/product/');
//     return response.data;
//   };