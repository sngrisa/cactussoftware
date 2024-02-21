import React from 'react';
import "./New.css";

const NewCard = ({ newCard }) => {
  return (
    <>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="wow fadeInUp group mb-10" data-wow-delay=".2s">
          <div class="mb-8 overflow-hidden rounded-[5px]">
            <a href="blog-details.html" class="block">
              <img
                src={newCard.imgUrl}
                alt="image"
                class="w-full transition group-hover:rotate-6 group-hover:scale-125 img-new"
              />
            </a>
          </div>
          <div>
            <span
              class="mb-6 inline-block rounded-[5px] bg-blue-500 px-4 py-0.5 text-center text-xs font-medium leading-loose text-white"
            >
              {newCard.date}
            </span>
            <h3>
              <a
                href="javascript:void(0)"
                class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {newCard.title}
              </a>
            </h3>
            <p
              class="max-w-[370px] text-base text-body-color dark:text-dark-6"
            >
              {newCard.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewCard;
