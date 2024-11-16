'use client'

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { categoriesList } from "../../data";
import { ICategory } from "../../interfaces";



interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}

const SelectCategory = ({selected, setSelected} : IProps) => {



  return (
    <Listbox value={selected} onChange={setSelected} >
      {({ open }) => (
        <>
          <Label className="block mt-6  text-sm font-medium text-black">
            Category
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full py-3 cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
              <div className="flex items-center">
                <img
                  src={selected.imageURL}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categoriesList.map((category) => (
                  <ListboxOption
                    key={category.id}
                    value={category}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                      <img
                        src={category.imageURL}
                        alt=""
                        className="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span
                        className={`ml-3 block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {category.name}
                      </span>
                    </div>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                      <CheckIcon aria-hidden="true" className="size-5" />
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SelectCategory;
