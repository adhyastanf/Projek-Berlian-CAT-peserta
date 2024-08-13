// pages/api/submit-answer.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { questionId, jawabanText, soalText } = await request.json();

  // Tangani pengiriman ID jawaban yang dipilih
  console.log(`Question ID: ${questionId}, Selected Answer ID: ${jawabanText}, soalText : ${soalText}`);

  // Respon dengan pesan sukses
  return NextResponse.json({ message: 'Jawaban berhasil dikirim' });
}
