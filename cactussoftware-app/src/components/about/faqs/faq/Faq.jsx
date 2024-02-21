import React from 'react';
import "./Faq.css";

const Faq = ({ faq }) => {
  return (
    <>
      <div class="mb-12 flex lg:mb-[70px]">
        <div
          class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"
        >
          <span className='icon-faq'>{faq.icon}</span>
        </div>
        <div class="w-full">
          <h3
            class="mb-6 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {faq.title}
          </h3>
          <p class="text-base">
            {faq.desc}
          </p>
        </div>
      </div>
    </>
  )
}

export default Faq;
