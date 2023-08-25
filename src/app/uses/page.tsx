import Link from 'next/link';

export default function Uses() {
  return (
    <>
      <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
        Uses
      </h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Inspired by{' '}
        <Link href='uses.tech' className='text-main underline' target='_blank'>
          uses.tech
        </Link>{' '}
        from the brilliant Wes Bos, /uses features the technology I use on a
        day-to-day basis. I attempt to keep this list up-to-date, but it may not
        always be. Feel free to check back periodically for updates!
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl'>
        Hardware
      </h2>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li>
          2017 13&quot; MacBook Pro
          <p className='pt-2 text-sm text-gray-600 dark:text-gray-300'>
            I bought this new in 2019 and have regretted it ever since. I plan
            on upgrading to a 2023 15&quot; M2 MacBook Air by the end of the
            year.
          </p>
        </li>
        <li>
          Logitech MX Mechanical Mini for Mac Keyboard
          <p className='pt-2 text-sm text-gray-600 dark:text-gray-300'>
            I&apos;ve always been a fan mechanical keyboards, but I hated the
            loud, obnoxious ones, which I know is a bit of an oxymoron. I
            recently upgraded to the Logitech MX Mechanical as I&apos;ve used
            their MX mouse for years.
          </p>
        </li>
        <li>
          Logitech MX Master 2S Mouse
          <p className='pt-2 text-sm text-gray-600 dark:text-gray-300'>
            You&apos;ll notice a trend that I really enjoy Logitech products.
            This may be due to the fact that I have not tried out many
            alternatives, because I have been so happy since the start. The
            quality is so nice and, in my experience, their products last much
            longer than many electronics today.
          </p>
        </li>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl'>
        Software
      </h2>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li>
          Raycast
          <p className='pt-2 text-sm text-gray-600 dark:text-gray-300'>
            &apos;Nuff Said.
          </p>
        </li>
      </ul>
    </>
  );
}
