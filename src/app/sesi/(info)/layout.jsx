export default function LayoutInfoQuiz({ children }) {
  return (
    <div className="flex flex-col w-full text-center">
      Silahkan Dibaca Untuk Informasi Pengerjaan Soal Sebelum Dimulai
      {children}
    </div>
  );
}
