import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section>
        <Link href={'/biodata'}>Biodata</Link>
      </section>
      <section>
        <Link href={'/quiz1'}>Quiz 1</Link>
      </section>
      <section>
        <Link href={'/quiz2'}>Quiz 2</Link>
      </section>
    </main>
  );
}
