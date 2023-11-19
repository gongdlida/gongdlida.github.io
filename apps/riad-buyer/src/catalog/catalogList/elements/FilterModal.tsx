import { Modal } from '@/components/Modal';
import { ReactSVG } from 'react-svg';
import { catalogStore } from '@/catalog/store';
import { SelectButton } from '@/catalog/catalogList/elements';
import { CATEGORY_TYPE, GRADE, ROOM_TYPE } from '@/catalog/constants';
import {
  updateFilteredOptions,
  _getCatalogList,
  clearFilteredOptions,
} from '@/catalog/catalogList/container';
import { useEffect, useState } from 'react';

export const FilterModal = () => {
  const [catalog, setCatalog] = useState<TCatalogStatus>({
    list: null,
    printList: null,
  });

  const {
    isModalOpen,
    setIsModalOpen,
    filterOptions,
    setFilterOptions,
    clearFilterOptions,
  } = catalogStore();

  useEffect(() => {
    if (catalog.list === null) _getCatalogList(setCatalog, setFilterOptions);
  }, []);

  return (
    <Modal isOpen={isModalOpen}>
      <article className='flex flex-col rounded-lg bg-white'>
        <header className='border-grey-300 w-[780px] border-b-[1px]'>
          <div className='text-L/Medium relative flex items-center justify-center py-4'>
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute left-6 flex h-6 w-6 items-center justify-center rounded-lg hover:bg-gray-200 hover:opacity-80'
            >
              <ReactSVG
                src='/assets/icons/Close.svg'
                beforeInjection={(svg) =>
                  svg.setAttribute('class', 'w-4 h-4 fill-grey-800')
                }
              />
            </button>
            <p className='text-L/Medium'>Filters</p>
          </div>
        </header>

        <main>
          <div className='max-h-[700px] max-w-[780px] divide-y-2 overflow-hidden px-6'>
            <SelectButton
              title={'Category Type'}
              target={filterOptions.category}
              options={CATEGORY_TYPE}
              callback={(category: TFilterType['category']) =>
                updateFilteredOptions(filterOptions, setFilterOptions, {
                  key: 'category',
                  value: category as TFilterType['category'],
                })
              }
            />
            <SelectButton
              title={'Grade'}
              target={filterOptions.grade}
              icon={
                <ReactSVG
                  src='/assets/icons/Star.svg'
                  beforeInjection={(svg) =>
                    svg.setAttribute('class', 'fill-grey-600 w-4 h-4')
                  }
                />
              }
              options={GRADE}
              callback={(grade: TFilterType['grade']) =>
                updateFilteredOptions(filterOptions, setFilterOptions, {
                  key: 'grade',
                  value: grade as TFilterType['grade'],
                })
              }
            />
            <SelectButton
              title={'Room Type'}
              target={filterOptions.roomType}
              options={ROOM_TYPE}
              callback={(roomType: TFilterType['roomType']) =>
                updateFilteredOptions(filterOptions, setFilterOptions, {
                  key: 'roomType',
                  value: roomType as TFilterType['roomType'],
                })
              }
            />
          </div>
        </main>

        <footer className='border-grey-300 w-[780px] border-t-[1px]'>
          <div className='flex items-center justify-between px-6 py-4'>
            <button
              onClick={() =>
                clearFilteredOptions(clearFilterOptions, setCatalog, setFilterOptions)
              }
            >
              <p className='text-L/Medium underline'>Clear All</p>
            </button>
            <button className='btn-xl-submit-filled rounded-lg bg-orange-500 py-3'>
              <p className='text-L/Medium'>
                Show {catalog.printList?.length || 0} Places
              </p>
            </button>
          </div>
        </footer>
      </article>
    </Modal>
  );
};