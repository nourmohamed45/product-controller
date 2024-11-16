/**
 * A custom select component that allows the user to select a category
 * @param selected - The currently selected category
 * @param setSelected - A function to change the selected category
 * @returns A custom select component
 */
"use client";

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

const SelectCategory = ({ selected, setSelected }: IProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="block mt-6  text-sm font-medium text-primaryShadowButton">
            Category
          </Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full py-3 cursor-default rounded-md bg-prodModalBg  pl-3 pr-10 text-left text-titleColor shadow-sm shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryButton sm:text-sm">
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
                  className="h-5 w-5 text-subtitleColor"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-prodModalBg py-1 text-base shadow-lg ring-2 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                {categoriesList.map((category) => (
                  <ListboxOption
                    key={category.id}
                    value={category}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-subtitleColor data-[focus]:bg-primaryBoldButton data-[focus]:text-titleColor"
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

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primaryBoldButton group-data-[focus]:text-titleColor [.group:not([data-selected])_&]:hidden">
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

