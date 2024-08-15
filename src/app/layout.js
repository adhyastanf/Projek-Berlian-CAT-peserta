import { Inter, Poppins } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Selamat Datang di Tes CAT Kecamatan Surajadi',
  description: 'Website tes CAT',
  icons: {
    icon: './favicon.ico', // This should be placed in public/favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <nav className='navbar bg-third text-white justify-between flex px-10 py-6'>
          <Image src='/Logo_Kabupaten_Tegal.png' width={150} height={150} alt='Logo Kabupaten Tegal' />
          <a className='text-2xl font-bold text-stroke'>
            PANITIA PENGANGKATAN PERANGKAT DESA <br /> KECAMATAN SURADADI KABUPATEN TEGAL
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
