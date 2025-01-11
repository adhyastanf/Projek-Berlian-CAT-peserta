'use server';

import { fetchCreatePeserta } from '@/helpers/service';

const createPeserta = async (data) => {
  try {
    const body = {
      noUjian: data.nomor_ujian,
      namaLengkap: data.nama_lengkap,
      gender: data.jenis_kelamin,
      pendidikanTerakhir: data.pendidikan_terakhir,
      alamat: data.alamat,
      kodeDesa: data.kode_desa,
    }
    const response = await fetchCreatePeserta(body)
    return response?.data?.user;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to submit data';
    throw new Error(errorMessage);
  }
};

export default createPeserta;
