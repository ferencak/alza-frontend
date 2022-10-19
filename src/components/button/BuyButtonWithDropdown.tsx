import { FC, useRef, useState } from 'react'

import { IDropdownItem } from 'interfaces/IDropdownItem'
import { IProduct } from 'interfaces/IProduct'

import { useOutsideClick } from 'hooks/useOutsideClick'

interface IBuyButtonWithDropdownProps {
  data: IProduct
  items: IDropdownItem[]
}

const BuyButtonWithDropdown: FC<IBuyButtonWithDropdownProps> = ({ data, items }): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const buyButtonRef = useRef<HTMLDivElement>(null)
  const outsideClickRegister = useOutsideClick(buyButtonRef, () => setIsDropdownOpen(false))

  return (
    <div ref={buyButtonRef} className="inline-flex items-stretch rounded-md border bg-white cursor-pointer">
      <a
        className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        onClick={() => {
          window.open(data.url, '_blank')
        }}
      >
        Koupit
      </a>

      <div className="relative">
        <button
          type="button"
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="sr-only">Více</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              {items.map((item: IDropdownItem, index: number) => (
                <a
                  key={index}
                  className="inline-flex items-center w-full gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={() => item.onClick && item.onClick()}
                >
                  {item.icon || <></>}
                  {item.value}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BuyButtonWithDropdown
