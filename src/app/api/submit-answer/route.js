// pages/api/submit-answer.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { questionId, jawabanText, noUjian, soalText } = await request.json();

  // Tangani pengiriman ID jawaban yang dipilih
  console.log(`No Ujian: ${noUjian}, Selected Answer: ${jawabanText}, soalText : ${soalText}`);

  // Respon dengan pesan sukses
  return NextResponse.json({ message: 'Jawaban berhasil dikirim' });
}
