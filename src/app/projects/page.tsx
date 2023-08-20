import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
        Projects
      </h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I&apos;m currently working on a few projects. I&apos;ll be sure to add
        them here when they&apos;re ready.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Featured Project
      </h2>
      <article className='mt-6 grid grid-cols-2 rounded-md border leading-7'>
        <div className='relative'>
          <Image
            alt='Project screenshot'
            src='/profile.png'
            fill={true}
            className='rounded-l-md object-cover'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl font-semibold tracking-tight'>Project Name</h3>
          <p className='mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, voluptatem quibusdam, quae voluptatibus, quod
            consequatur quia voluptatum doloribus nemo quos? Doloribus, quod
            voluptatibus? Nemo, voluptatem! Repellat, quibusdam. Quo, quod
            voluptatibus.
          </p>
        </div>
      </article>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Other Projects
      </h2>
      <div className='grid grid-cols-2 gap-6'>
        <article className='relative mt-6 grid rounded-md border leading-7'>
          <div className='relative aspect-video'>
            <Image
              alt='Project screenshot'
              src='/profile.png'
              fill={true}
              className='rounded-t-md object-cover'
            />
          </div>
          <div className='p-4'>
            <h3 className='text-xl font-semibold tracking-tight'>
              Project Name
            </h3>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, voluptatem quibusdam, quae voluptatibus, quod
              consequatur quia voluptatum doloribus nemo quos? Doloribus, quod
              voluptatibus? Nemo, voluptatem! Repellat, quibusdam. Quo, quod
              voluptatibus.
            </p>
          </div>
        </article>
        <article className='relative mt-6 grid rounded-md border leading-7'>
          <div className='relative aspect-video'>
            <Image
              alt='Project screenshot'
              src='/profile.png'
              fill={true}
              className='rounded-t-md object-cover'
            />
          </div>
          <div className='p-4'>
            <h3 className='text-xl font-semibold tracking-tight'>
              Project Name
            </h3>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, voluptatem quibusdam, quae voluptatibus, quod
              consequatur quia voluptatum doloribus nemo quos? Doloribus, quod
              voluptatibus? Nemo, voluptatem! Repellat, quibusdam. Quo, quod
              voluptatibus.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
