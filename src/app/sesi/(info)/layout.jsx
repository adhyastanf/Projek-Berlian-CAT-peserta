
export default function LayoutInfoQuiz({ children }) {
  return (
    <div>
      <div className='flex flex-col w-full text-center'>
        Silahkan Dibaca Untuk Informasi Pengerjaan Tiap Sesi Sebelum Dimulai
        {children}
      </div>
    </div>
  );
}
