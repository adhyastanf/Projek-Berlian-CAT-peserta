'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Assuming you're using Next.js
import useAuthAdminStore from '@/store/auth-store-admin';

export default function DataDesaTable() {
  const [kodeDesa, setKodeDesa] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const logout = useAuthAdminStore((state) => state.logout); // Get the logout action from the store
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const response = await axios.get('http://3.0.20.136:8080/data-desa', {
          params: { kodeDesa },
        });

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          throw new Error('Data format is incorrect');
        }
      } catch (error) {
        setErrorMessage('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [kodeDesa]);

  const downloadFile = (filename) => {
    axios
      .get(`http://3.0.20.136:8080/download/${filename}`, {
        responseType: 'blob',
      })
      .then((response) => {
        // Extract the filename from the Content-Disposition header
        const contentDisposition = response.headers['content-disposition'];
        let downloadFilename = filename; // Default filename if not provided in header

        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
          if (fileNameMatch.length > 1) {
            downloadFilename = fileNameMatch[1];
          }
        }

        // Create a link element, trigger a click, and remove it
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', downloadFilename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        console.error('Error downloading the file:', error);
      });
  };

  const handleDownload = (filename) => {
    if (filename) {
      downloadFile(filename);
    } else {
      console.error('Filename is missing');
    }
  };

  const handleLogout = () => {
    logout(); // Clear authentication details
    router.push('/'); // Redirect to the login page
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Data Nilai Peserta Tiap Desa</h2>
        <button onClick={handleLogout} className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>
          Logout
        </button>
      </div>

      <div className='mb-4'>
        <button onClick={() => setKodeDesa(1)} className={`px-4 py-2 mr-2 rounded ${kodeDesa === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Desa Harjasari
        </button>
        <button onClick={() => setKodeDesa(2)} className={`px-4 py-2 rounded ${kodeDesa === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Desa Suradadi
        </button>
      </div>

      {loading ? (
        <p></p>
      ) : errorMessage ? (
        <p className='text-red-500'>{errorMessage}</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b'>Nama Lengkap</th>
                <th className='py-2 px-4 border-b'>Nama Desa</th>
                <th className='py-2 px-4 border-b'>Nilai</th>
                <th className='py-2 px-4 border-b'>File Docx</th>
                <th className='py-2 px-4 border-b'>File Xlsx</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td className='py-2 px-4 border-b text-center'>{item.namaLengkap}</td>
                  <td className='py-2 px-4 border-b text-center'>{item.namaDesa}</td>
                  <td className='py-2 px-4 border-b text-center'>{item.nilai}</td>
                  <td className='py-2 px-4 border-b'>
                    <button onClick={() => handleDownload(item.filenameDocx)} className='text-blue-600 hover:underline'>
                      {item.filenameDocx}
                    </button>
                  </td>
                  <td className='py-2 px-4 border-b'>
                    <button onClick={() => handleDownload(item.filenameXlsx)} className='text-blue-600 hover:underline'>
                      {item.filenameXlsx}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
