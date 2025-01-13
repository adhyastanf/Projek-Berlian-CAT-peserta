import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGetQuiz1({ noUjian, kodeDesa }) {
  const response = await api.get(`/genSoal`, {
    params: { noUjian, kodeDesa },
  });

  return response;
}

export async function fetchGetTime(section) {
  const response = await api.get('/time', { params: { ujian: section } });
  return response;
}

export async function fetchGetStatus({ noUjian, kodeDesa }) {
  const response = await api.get('/status', {
    params: { noUjian, kodeDesa },
  });

  return response;
}

export async function fetchGetNilai({ noUjian, kodeDesa }) {
  const response = await api.get(`/nilai`, {
    params: { noUjian, kodeDesa },
  });

  return response;
}

export async function fetchCreateNilai({ noUjian, kodeDesa }) {
  const response = api.post(`/nilai`, { noUjian, kodeDesa });

  return response;
}

export async function fetchUpdateStatus(body) {
  const response = await api.put('/status', body);

  return response;
}

export async function fetchCreateFile(fileData) {
  const response = await api.post('/upload', fileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
}

export async function fetchSubmitSoal(body) {
  return await api.put('/submit-soal', body);
}

export async function fetchGetDataDesa({ kodeDesa }) {
  const response = await api.get('/data-desa', {
    params: { kodeDesa },
  });
  return response;
}

export async function fetchCreatePeserta(body) {
  const response = await api.post('/biodata', body);
  return response;
}
export async function fetchLoginAdmin({ username, password }) {
  const response = await api.post('/admin', {
    username,
    password,
  });

  return response;
}

export async function fetchDownloadDocX() {
  const response = await fetch(BASE_URL.concat(`/download/NAMA.docx`), {
    method: 'GET',
  });
  return response;
}

export async function fetchDownloadFile(filename) {
  return api.get(`/download/${filename}`, {
    responseType: 'blob',
  });
}

export async function fetchGetListDesa() {
  return api.get('/list-desa');
}

export async function fetchGetQuiz2(kodeDesa) {

  const response = await api.get(`/gambar-soal?kodeDesa=${kodeDesa}`);

  return response;
}