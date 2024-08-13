import ButtonStartQuiz from "./buttonStart";

export default function InfoQuiz1() {
  return (
    <div className='max-w-4xl mx-auto p-6 shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        TES UJIAN TERTULIS BERBASIS CAT (COMPUTER ASSISTED TEST)
        <br />
        CALON PERANGKAT DESA HARJASARI
      </h1>
      <p className='text-lg text-center mb-6'>
        <strong>Hari, Tanggal:</strong> Kamis, 22 Agustus 2024
        <br />
        <strong>Waktu:</strong> 90 Menit
        <br />
        <strong>Pukul:</strong> 08.00 WIB - 09.30 WIB
      </p>
      <p className='text-lg font-semibold mb-4'>PETUNJUK PENGERJAAN SOAL</p>
      <ol className='list-decimal list-inside space-y-2 text-lg'>
        <li>Awali dengan berdo’a dan kerjakan soal yang mudah terlebih dahulu.</li>
        <li>Tuliskan nama dan identitas Anda dengan lengkap.</li>
        <li>Pilihlah jawaban dengan memilih pada huruf jawaban yang dianggap paling benar!</li>
        <li>Jumlah soal sebanyak 50, terdiri dari 40 soal pilihan ganda dan 10 soal isian.</li>
        <li>Selamat mengerjakan!</li>
      </ol>
      <ButtonStartQuiz />
    </div>
  );
}
