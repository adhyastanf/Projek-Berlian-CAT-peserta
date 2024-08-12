// pages/api/submit-answer.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { questionId, essayText } = await request.json();

  // Tangani pengiriman ID jawaban yang dipilih
  console.log(`Question ID: ${questionId}, Essay Text: ${essayText}`);

  // Respon dengan pesan sukses
  return NextResponse.json({ message: 'Jawaban berhasil dikirim' });
}
