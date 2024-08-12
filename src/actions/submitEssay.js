'use server';
import axios from 'axios';

const submitEssay = async (questionId, essayText) => {
  try {
    const response = await axios.post('http://localhost:3000/api/submit-essay', {
      questionId,
      essayText,
    });
    return response.data.message; // Mengembalikan data jika diperlukan
  } catch (error) {
    console.error('Error submitting essay:', error);
    // Tangani error sesuai kebutuhan Anda
  }
};

export { submitEssay };
