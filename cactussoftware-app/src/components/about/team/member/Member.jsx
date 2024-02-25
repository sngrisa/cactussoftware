import React from 'react';
import "./Member.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Member = ({ member }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4 card-member">
        <div
          className="px-5 pt-12 pb-10 mb-8 group rounded-xl shadow-testimonial bg-white dark:shadow-none"
        >
          <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
            <img
              src={member.imgMember}
              alt="team image"
              className="h-[120px] w-[120px] rounded-full"
            />
            <span
              className="absolute bottom-0 left-0 w-10 h-10 transition-all rounded-full opacity-0 -z-10 bg-secondary group-hover:opacity-100"
            ></span>
            <span
              className="absolute top-0 right-0 transition-all opacity-0 -z-10 group-hover:opacity-100"
            >
              <svg
                width="45"
                height="53"
                viewBox="0 0 45 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                  fill="#3056D3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
          <div className="text-center">
            <h4
              className="mb-1 text-lg font-semibold"
            >
              {member.name}
            </h4>
            <p className="mb-5 text-sm text-body-color">
              {member.work}
            </p>
            <div className="flex items-center justify-center gap-5">
              <a
                href={member.likenid}
                className="text-dark-6 hover:text-primary"
              >
                <FaLinkedin />
              </a>
              <a
                href={"mailto:" + member.email}
                className="text-dark-6 hover:text-primary"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Member;
