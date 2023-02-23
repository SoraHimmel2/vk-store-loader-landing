const Footer: React.FunctionComponent = () => {
  return (
    <footer className=' w-full   bg-gray-800  pt-10 sm:mt-10'>
      <div className='m-auto flex max-w-6xl flex-wrap  border-b border-gray-500  text-gray-800'>
        <div className='black w-1/2  p-5 text-center sm:w-4/12 md:w-4/12'>
          <div className='mb-6 text-xs font-medium uppercase text-gray-400'>
            GitHub
          </div>

          <a
            href='https://github.com/SoraHimmel2'
            className='my-3 block text-sm font-medium text-gray-300 duration-700 hover:text-green-500'
          >
            SoraHimmel2
          </a>
        </div>

        <div className='black w-1/2 p-5 text-center sm:w-4/12 md:w-4/12'>
          <div className='mb-6 text-xs font-medium uppercase text-gray-400'>
            HH
          </div>

          <a
            href='#'
            className='my-3 block text-sm font-medium text-gray-300 duration-700 hover:text-green-500'
          >
            Utility-First
          </a>
        </div>

        <div className='black w-1/2 p-5 text-center sm:w-4/12 md:w-4/12'>
          <div className='mb-6 text-xs font-medium uppercase text-gray-400'>
            Youtube
          </div>

          <a
            href='#'
            className='my-3 block text-sm font-medium text-gray-300 duration-700 hover:text-green-500'
          >
            Configuration
          </a>
        </div>
      </div>

      <div className='pt-2'>
        <div className='m-auto flex max-w-4xl  flex-row  justify-center  px-3 pb-5 pt-5 text-sm text-gray-400'>
          <div className='mt-2'>
            © Copyright 2023-year. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
