import ButtonStartQuiz from "./buttonStart";

export default function InfoQuiz2() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold text-center mb-4'>
      UJIAN PRAKTEK KOMPUTER CALON PERANGKAT DESA HARJASARI
        <br />
        CALON PERANGKAT DESA HARJASARI
      </h1>
      <p className='text-lg text-center mb-6'>
        <strong>Hari, Tanggal:</strong> Kamis, 22 Agustus 2024
        <br />
        <strong>Waktu:</strong> 90 Menit
        <br />
        <strong>Pukul:</strong> 09.30 WIB - 11.00 WIB
      </p>
      
      <ButtonStartQuiz />
    </div>
  );
}
