// app/api/get-file/route.js
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function GET(request) {
  const url = new URL(request.url);
  const fileName = url.searchParams.get('fileName');

  const filePath = path.join(uploadDir, fileName);

  if (fs.existsSync(filePath)) {
    return NextResponse.json({ filePath });
  } else {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
