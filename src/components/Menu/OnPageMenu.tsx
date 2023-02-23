import Link from 'next/link';

interface OnPageMenuProps {
  menuItems: MenuItem[];
  titleText: string;
}
export interface MenuItem {
  id: string;
  label: string;
}

const OnPageMenu: React.FunctionComponent<OnPageMenuProps> = ({
  menuItems,
  titleText,
}) => {
  return (
    <menu className='lg:left-38 absolute top-5 flex flex-col items-start justify-items-center border-l  border-black sm:left-20 md:left-16  lg:top-32 xl:left-72  '>
      <h1 className='w-44 break-keep px-4 text-4xl font-semibold text-blue-600 sm:text-6xl '>
        {titleText}
      </h1>
      {menuItems.map((item) => {
        return (
          <span key={item.id} className='my-4 px-4 text-start font-bold '>
            <Link
              href={`#${item.id}`}
              className='  p-1 text-2xl text-black/90 hover:text-green-500 lg:text-4xl'
            >
              {item.label}
            </Link>

            <div className='my-2  border-b border-black ' />
          </span>
        );
      })}
    </menu>
  );
};

export default OnPageMenu;
