// pages/api/submit-answer.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { questionId, selectedAnswerId } = await request.json();

  // Tangani pengiriman ID jawaban yang dipilih
  console.log(`Question ID: ${questionId}, Selected Answer ID: ${selectedAnswerId}`);

  // Respon dengan pesan sukses
  return NextResponse.json({ message: 'Jawaban berhasil dikirim' });
}
