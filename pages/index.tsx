import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import TopTracks from 'components/TopTracks';
import Gear from 'components/Gear';
import About from 'components/About';
import ThemeToggle from 'components/ThemeToggle';


export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <div className='flex flex-row items-center'>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Arsen Zairov
              </h1> 
              <div className='ml-6 mb-2'> 
              <ThemeToggle/>
              </div>
              </div>
     
              <h2 className="text-gray-700 dark:text-gray-200 mb-4 mt-2">
                Software Developer at Beeline
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I enjoy turning complex problems into simple beautiful and
                intuitive interface designs. When I'm not coding, you'll find me
                in the gym or playing soccer.
              </p>
            </div>
     
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Arsen Zairov"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

            <div>
              <About/>
            </div>

          <div className='mb-10'>
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </p>
          <TopTracks />
          </div>

          <div className='mt-16'> 

          <Gear/>

          </div>
        </div>
      </Container>
    </Suspense>
  );
}
