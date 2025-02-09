import { Outfit } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const outfit = Outfit({
  subsets: ['latin'],
});

const linksData = [
  {
    id: 1,
    title: 'Instagram',
    url: 'https://www.instagram.com/avipsyaifulloh',
  },
  {
    id: 2,
    title: 'YouTube',
    url: 'https://www.youtube.com/@vipcodestudio',
  },
  {
    id: 3,
    title: 'TikTok',
    url: 'https://www.tiktok.com/@vipcodestudio',
  },
];
const Home = () => {
  return (
    <main
      className={`${outfit.className} bg-gradient-to-br from-emerald-100 to-emerald-200`}
    >
      <section className="min-h-screen container mx-auto px-4 py-16 lg:max-w-96">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-3xl font-semibold text-gray-700 mt-2">
            Avip Syaifulloh
          </h1>
          <p className="w-2/3 text-center">Software Engineer</p>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {linksData.map((data: { id: number; title: string; url: string }) => (
            <Link
              key={`${data.title}-${data.id}`}
              href={data.url}
              className="w-full font-semibold border-black border-2 p-2.5 bg-emerald-400 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
            >
              {data.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
