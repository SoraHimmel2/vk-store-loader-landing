import * as React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import ImageWithText from '@/components/ImageWithText/ImageWithText';
import OnPageMenu from '@/components/Menu/OnPageMenu';
import { MenuItem } from '@/components/Menu/OnPageMenu';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const MenuItems: MenuItem[] = [
    { id: 'send', label: 'Отправить' },
    { id: 'update', label: 'Обновить' },
    { id: 'delete', label: 'Удалить' },
    { id: 'send_all', label: 'Отправить все' },
    { id: 'check_goods', label: 'Сверить товары' },
    { id: 'video', label: 'Видео работы' },
  ];
  const smallSize = 640;
  const imageLeft = true;
  const [imageRight, setImageRight] = React.useState(false);
  React.useEffect(() => {
    const checkWindowSize = (type: string) => {
      if (window.innerWidth < smallSize) {
        setImageRight(true);
      } else {
        setImageRight(false);
      }
    };
    window.addEventListener('resize', () => {
      checkWindowSize('resize');
    });
    window.addEventListener('scroll', () => {
      checkWindowSize('scroll');
    });
  }, []);
  return (
    <main className=''>
      <ParallaxBanner
        className=' h-[600px] w-full md:h-[800px] lg:h-[1000px] '
        style={{ aspectRatio: '1/2' }}
      >
        <ParallaxBannerLayer speed={-30}>
          <div className=' sm:pt-0'>
            <img
              src='./images/logo.jpg'
              className='w-full pt-96  blur-sm sm:pt-40 sm:blur-none md:pt-20   xl:scale-50'
            ></img>
          </div>
        </ParallaxBannerLayer>
        <div className='flex  justify-start pl-2 md:justify-center'>
          <OnPageMenu
            menuItems={MenuItems}
            titleText='Загрузка товаров в вк'
          ></OnPageMenu>
        </div>
      </ParallaxBanner>
      <section className='   '>
        <ImageWithText
          text='Отправка товара осуществляется путем введения номера. Во время отправки появляются уведомления о начале отправки и ее завершении. После успешной отправки товара ячейка столбца артикула будет закрашена в зеленый цвет, если во время отправки возникла ошибка - в красный.
          '
          imageSrc='./images/send.jpg'
          imageClass='  sm:h-[60%] lg:h-[80%] xl:h-[80%] '
          imageContainerClass='flex   flex-col h-[100%] '
          textClass='text-left mx-4 my-2 sm:w-[85%] md:w-[75%] lg:w-[65%] text-2xl sm:text-3xl self-start'
          textTitle='Отправить товар по номеру'
          textTitleClass='text-left mx-4 sm:w-[80%] md:w-[60%] text-3xl sm:text-4xl'
          className='  mt-20 grid grid-cols-1  justify-items-center border-r border-black p-2 sm:grid-cols-2 sm:border-none'
          position={imageLeft}
          section='send'
        />

        <ImageWithText
          text='Обновление осуществляется по введеному номеру товара. Сначала происходит удаление товара, далее товар загружается с новыми данными. Важно отметить, при удалении товара удаляются все товары в сообществе вк с данным именем, так как определено, что первичным явлются гугл таблицы,и имя товара должно быть уникально.
          '
          imageSrc='./images/update.jpg'
          imageClass=' sm:h-[50%] lg:h-[65%] xl:h-[100%]'
          imageContainerClass='flex   flex-col h-[100%] '
          textClass='text-left  my-2 sm:w-[85%] md:w-[75%] lg:w-[65%] text-2xl sm:text-3xl self-start'
          textTitle='Обновить товар по номеру'
          textTitleClass='text-left sm:w-[80%] md:w-[60%] text-3xl sm:text-4xl'
          className='m-2  grid grid-cols-1  justify-items-center border-r border-black p-2 sm:grid-cols-2 sm:border-none'
          position={imageRight}
          section='update'
        />

        <ImageWithText
          text='При удаление товара удаляются все товары с именем, которе указано в гугл документах,так как имя товара должно быть уникальным и гугл документы являются первичными.
           '
          imageSrc='./images/delete.jpg'
          imageClass='   sm:h-[60%] lg:h-[80%] xl:h-[100%] '
          imageContainerClass='flex   flex-col h-[100%] '
          textClass='text-left mx-4 my-2 sm:w-[85%] md:w-[75%] lg:w-[65%] text-2xl sm:text-3xl self-start'
          textTitle='Удалить товар по номеру'
          textTitleClass='text-left sm:w-[80%] mx-4 md:w-[60%] text-3xl sm:text-4xl'
          className='m-2  grid grid-cols-1  justify-items-center border-r border-black p-2 sm:grid-cols-2 sm:border-none'
          position={imageLeft}
          section='delete'
        />

        <ImageWithText
          text='Отправка осуществлятся в рамках листа в гугл таблице, отправляются все товары, не выделенные зеленым цветом. Из-за ограничения гугл документов на время выполнения скрипта, отправка осуществляется циклично,с перерывом в 1 минуту.'
          imageSrc='./images/send_all.jpg'
          imageClass='  sm:h-[100%] md:h-[95%] lg:h-[100%]  '
          imageContainerClass='flex   flex-col h-[100%] '
          textClass='text-left mx-4 my-2 sm:w-[85%] md:w-[75%] lg:w-[65%] text-2xl sm:text-3xl self-start'
          textTitle='Отправить все'
          textTitleClass='text-left sm:w-[80%] md:w-[60%] text-3xl sm:text-4xl'
          className='m-2  grid grid-cols-1  justify-items-center border-r border-black p-2 sm:grid-cols-2 sm:border-none'
          position={imageRight}
          section='send_all'
        />

        <ImageWithText
          text='Сверка производит упорядочивание товаров - по итогу выполнения этой функции происходит привидение товаров 1 к 1, таким образом количестово товаров в гугл документах равно количеству товаров в вк. Важно отметить, что первичным являются гугл документы.'
          imageSrc='./images/revise.jpg'
          imageClass='  sm:h-[45%] md:h-[50%] lg:h-[75%] xl:h-[90%]  '
          imageContainerClass='flex   flex-col h-[100%] '
          textClass='text-left mx-4 my-2 sm:w-[85%] md:w-[75%] lg:w-[65%] text-2xl sm:text-3xl self-start'
          textTitle='Сверка товаров'
          textTitleClass='text-left sm:w-[80%] mx-4 md:w-[60%] text-3xl sm:text-4xl'
          className='m-2  grid grid-cols-1  justify-items-center border-r border-black p-2 sm:grid-cols-2 sm:border-none'
          position={imageLeft}
          section='check_goods'
        />
      </section>
      <section
        className='flex  flex-col items-center  space-y-4 p-4'
        id='video'
      >
        <h1 className='my-4 text-center text-4xl'>Видео работы</h1>

        <iframe
          className='w-[95%] lg:w-[70%] xl:w-[60%]'
          height='600'
          src='https://www.youtube.com/embed/RivhQsrj2k0'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </section>
    </main>
  );
}
