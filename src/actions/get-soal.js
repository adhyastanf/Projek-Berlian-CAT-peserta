const getSoal = async () => {
    try {
      const res = await axios.get('http://localhost:3000/data3.json');
      return res.data; // Mengembalikan data jika diperlukan
    } catch (error) {
      console.error('Error getting questions:', error);
      // Tangani error sesuai kebutuhan Anda
    }
  };
  
  export { getSoal };