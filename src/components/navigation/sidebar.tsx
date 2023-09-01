type NavProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: NavProps) {
  return (
    <div className='hidden h-screen flex-col justify-between border-e bg-white dark:bg-gray-950 md:flex'>
      {children}
    </div>
  );
}
