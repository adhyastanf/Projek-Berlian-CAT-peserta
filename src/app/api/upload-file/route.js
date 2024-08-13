// app/api/upload-file/route.js
import { NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public/uploads');

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return resolve(
          NextResponse.json({ error: 'Error uploading file' }, { status: 500 })
        );
      }

      const uploadedFile = files.file[0];
      const fileName = uploadedFile.newFilename;

      // Return file name in response
      return resolve(
        NextResponse.json({ fileName }, { status: 200 })
      );
    });
  });
}
