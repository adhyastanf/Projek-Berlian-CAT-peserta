import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { questionId, jawabanText, noUjian } = await request.json();

    // Validasi input
    // if (!questionId || !essayText) {
    //   return NextResponse.json(
    //     { message: 'Question ID dan Essay Text harus diisi.' },
    //     { status: 400 }
    //   );
    // }

    // Tangani pengiriman ID jawaban yang dipilih
    console.log(`Soal Text: ${questionId}, Jawaban Text: ${jawabanText}, NoUjian: ${noUjian}`);

    // Lakukan proses penyimpanan atau pemrosesan data disini, jika diperlukan

    // Respon dengan pesan sukses
    return NextResponse.json({ message: 'Jawaban berhasil dikirim' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting answer:', error);

    // Respon dengan pesan error
    return NextResponse.json({ message: 'Terjadi kesalahan saat mengirim jawaban.' }, { status: 500 });
  }
}
