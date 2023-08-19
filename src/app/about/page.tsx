import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
        About
      </h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Hello again! My name is Ethan and I&apos;m a Web Developer at{' '}
        <Link
          href='https://centralstatesmarketing'
          target='_blank'
          className='text-main underline'
        >
          Central States Marketing
        </Link>
        .
      </p>
    </>
  );
}
