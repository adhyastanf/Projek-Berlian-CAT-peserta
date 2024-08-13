import FormDisplay from '@/components/form/form';
import Image from 'next/image';
import Hero from '../../public/hero.jpg';

export default function Home() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center h-screen'>
        <Image src={Hero} className='absolute w-screen h-full object-cover' alt='hero-home' />
        <div className='text-center space-y-8 text-white max-w-[1500px] relative'>
          <h1 className='text-7xl font-bold text-stroke'>Selamat Datang Peserta Tes CAT Desa Kecamatan Suradadi Kabupaten Tegal</h1>
          <h1 className='text-2xl font-medium text-stroke'>Silahkan Isi Biodata Diri Dibawah Ini Sebelum Memulai Tes</h1>
          {/* <Link href={'/biodata'}>
            <button className='btn btn-primary btn-base mt-4 text-white'>Isi Biodata</button>
          </Link> */}
        </div>
      </section>
      <section className='grid place-items-center mt-8 relative'>
        <h1 className='text-2xl font-bold'>Isi Biodata Diri Peserta</h1>
        <div className='w-full max-w-md'>
          <FormDisplay />
        </div>
      </section>
      {/* <SectionHome /> */}
    </div>
  );
}
