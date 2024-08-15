const loginAction = async (username, password) => {
  try {
    const response = await axios.post('http://18.141.142.63:8080/admin', {
      username,
      password,
    });
    return response?.data?.result; // Mengembalikan data yang diterima dari API
  } catch (error) {
    const errorMessage = error?.data?.message || 'Gagal login username atau password salah ';
    throw new Error(errorMessage);
  }
};

export { loginAction };
