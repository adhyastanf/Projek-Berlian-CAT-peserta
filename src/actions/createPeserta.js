'use server';

import axios from 'axios';

const createPeserta = async (data) => {
  try {
    const response = await axios.post('http://13.229.135.53:8080/biodata', {
        noUjian: data.nomor_ujian,
        namaLengkap: data.nama_lengkap,
        gender: data.jenis_kelamin,
        pendidikanTerakhir: data.pendidikan_terakhir,
        alamat: data.alamat,
        kodeDesa:data.kode_desa
      });
    return response?.data?.user; // Mengembalikan data yang diterima dari API
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to submit data';
    throw new Error(errorMessage);
  }
};

export default createPeserta;
