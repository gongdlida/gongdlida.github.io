import { useState } from 'react';
import { handleImages } from '@/catalog/catalogList/container';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { PATH } from '@/routes/constants';

interface ICard {
  catalog: TCatalogInfo;
}

export const Card = ({ catalog }: ICard) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [tabDisplay, setTabDisplay] = useState<'flex' | 'hidden'>('hidden');

  const { images } = catalog;

  return (
    <Link to={PATH.CATALOG_LIST}>
      <div id='catalog_card_frame' className='flex w-fit flex-col gap-3'>
        <div
          id='catalog_img'
          className='relative flex items-center'
          onMouseOut={() => setTabDisplay('hidden')}
          onMouseOver={() => setTabDisplay('flex')}
        >
          <img
            className='h-[300px] w-[310px] rounded-lg object-cover'
            src={images[currentImage]}
          />

          <div className='container absolute bottom-4 flex place-content-center gap-2'>
            {images.map((_, idx) => {
              const highlight = currentImage === idx ? ' bg-white' : 'bg-grey-700';
              return (
                <button
                  onClick={() => {
                    setCurrentImage(idx);
                  }}
                  key={`img_list_${idx}`}
                >
                  <div className={`${highlight} h-[6px] w-[6px] rounded`} />
                </button>
              );
            })}
          </div>
          <div
            className={`absolute w-full justify-between px-3 opacity-75 ${tabDisplay}`}
          >
            <button
              className=''
              onClick={(event) => handleImages(setCurrentImage, images, 'prev', event)}
            >
              <ReactSVG
                src='/assets/icons/Tab.svg'
                beforeInjection={(svg) =>
                  svg.setAttribute('class', ' w-[30px] h-[30px] bg-white rounded-full')
                }
              />
            </button>
            <button
              onClick={(event) => {
                handleImages(setCurrentImage, images, 'next', event);
              }}
            >
              <ReactSVG
                src='/assets/icons/Tab.svg'
                beforeInjection={(svg) => {
                  svg.setAttribute(
                    'class',
                    ' w-[30px] h-[30px] rotate-180 bg-white rounded-full',
                  );
                }}
              />
            </button>
          </div>
        </div>
        <div id='catalog_info' className='text-M/Regular flex flex-col'>
          <div className='flex justify-between'>
            <p className='w-[270px] truncate'>{catalog.hotel}</p>
            <div className='flex items-center gap-0.5'>
              <ReactSVG
                src='/assets/icons/Star.svg'
                beforeInjection={(svg) =>
                  svg.setAttribute('class', 'fill-grey-600 w-4 h-4')
                }
              />
              <p>{catalog.grade}</p>
            </div>
          </div>
          <p className='w-[300px] truncate'>{catalog.productName}</p>
          <p>{catalog.roomType}</p>
          <p className='text-M/Bold'>
            ${catalog.price} <span className='text-M/Regular'>/ night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
