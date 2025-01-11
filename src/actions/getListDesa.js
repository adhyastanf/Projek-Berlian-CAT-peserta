'use server';

import { fetchGetListDesa } from '@/helpers/service';

const getListDesa = async () => {
  try {
    const response = await fetchGetListDesa()
    return response.data.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to get list desa data';
    // throw new Error(errorMessage);
    console.log(errorMessage);
  }
};

export default getListDesa;
