/* eslint-disable no-unused-vars */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { formUrlQuery } from "@/lib/utils";
import { useState } from "react";

const HomeFilters = () => {
const router = useRouter();
const pathname = usePathname();
  const searchParams = useSearchParams();

  const [active , setActive ] = useState<string>("");


  const handleTypeClick = (item : string) => {

      if(active === item){

        setActive("")
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: item.toLowerCase()
        })
        router.push(newUrl , {scroll: false});
      }
        else{
          setActive("")
          const newUrl = formUrlQuery({
            params : searchParams.toString(),
            key: 'q',
            value : null
          })
          router.push(newUrl , {scroll: false});
        }

  }


  return (
    <div className="mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100 text-primary-500 dark:bg-dark-400 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          }`}

            onClickCapture= {()=> handleTypeClick(filter.value)}

        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
