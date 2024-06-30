"use client";
import react from "react";
import {
  Divider,
  Avatar,
  Tooltip,
  Breadcrumb,
  Input,
  Badge,
  Dropdown,
  Statistic,
  Button,
} from "antd";
import {
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Chart from "./chart";
import Statsone from "@/components/dashboard/statsone";
import StatsZero from "@/components/dashboard/statszero";
import Mobile from "@/components/dashboard/dashboard";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Notification A
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Notification B
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Notification C
      </a>
    ),
  },
];
// alert(typeof(document.querySelector(".sidebar")))

/**
 * Toggles the collapse state of the sidebar.
 * This includes hiding/showing the sidebar, logo title, badge, helper texts,
 * link texts, and adjusting the alignment of the links.
 */
function handleCollapse() {
  // Toggle the "uncollapsed" and "collapsed" classes of the sidebar
  document.querySelector(".sidebar")?.classList.toggle("uncollapsed");
  document.querySelector(".sidebar")?.classList.toggle("collapsed");

  // Toggle the "hidden" class of the logo title
  document.querySelector(".logo-title")?.classList.toggle("hidden");

  // Toggle the "hide-block" class of the badge
  document.querySelector(".badge")?.classList.toggle("hide-block");

  // Toggle the "hidden" class of all helper texts
  document.querySelectorAll(".helper-text").forEach((element) => {
    element.classList.toggle("hidden");
  });

  // Toggle the "hide-block" class of all link texts
  document.querySelectorAll(".link-text").forEach((element) => {
    element.classList.toggle("hide-block");
  });

  // Toggle the "justify-center" class of all links
  document.querySelectorAll(".links").forEach((element) => {
    element.classList.toggle("justify-center");
  });
}

export default function () {
  return (
    <div className="dash-ele-wrap h-full flex">
      <div className="uncollapsed sidebar z-2  border  bg-[#F6F5F2] flex flex-col justify-between">
        <div className="top-fx  flex flex-col">
          <div className="flex p-3 justify-between items-center relative">
            <div className="logo-wrap flex gap-1 items-center">
              <div>
                <svg
                  fill="none"
                  height="25"
                  viewBox="0 0 48 48"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <filter
                    id="a"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="54"
                    width="48"
                    x="0"
                    y="-3"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="-3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result="effect1_innerShadow_3051_46875"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    />
                    <feBlend
                      in2="effect1_innerShadow_3051_46875"
                      mode="normal"
                      result="effect2_innerShadow_3051_46875"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      in="SourceAlpha"
                      operator="erode"
                      radius="1"
                      result="effect3_innerShadow_3051_46875"
                    />
                    <feOffset />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.24 0"
                    />
                    <feBlend
                      in2="effect2_innerShadow_3051_46875"
                      mode="normal"
                      result="effect3_innerShadow_3051_46875"
                    />
                  </filter>
                  <filter
                    id="b"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="42"
                    width="36"
                    x="6"
                    y="5.25"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      in="SourceAlpha"
                      operator="erode"
                      radius="1.5"
                      result="effect1_dropShadow_3051_46875"
                    />
                    <feOffset dy="2.25" />
                    <feGaussianBlur stdDeviation="2.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_3051_46875"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3051_46875"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="24"
                    x2="26"
                    y1=".000001"
                    y2="48"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity="0" />
                    <stop offset="1" stop-color="#fff" stop-opacity=".12" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    gradientUnits="userSpaceOnUse"
                    x1="24"
                    x2="24"
                    y1="9"
                    y2="39"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity=".8" />
                    <stop offset="1" stop-color="#fff" stop-opacity=".5" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    gradientUnits="userSpaceOnUse"
                    x1="24"
                    x2="24"
                    y1="0"
                    y2="48"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity=".12" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="f">
                    <rect height="48" rx="12" width="48" />
                  </clipPath>
                  <g filter="#26577C">
                    <g clip-path="url(#f)">
                      <rect fill="#26577C" height="48" rx="12" width="48" />
                      <path d="m0 0h48v48h-48z" fill="#26577C" />
                      <g filter="#26577C">
                        <path
                          d="m9 12.75c0-2.0711 1.6789-3.75 3.75-3.75h7.5c2.0711 0 3.75 1.6789 3.75 3.75v7.3644c.0002.045.0003.0902.0003.1356 0 2.0681 1.6741 3.7452 3.741 3.75h.0087 7.5c2.0711 0 3.75 1.6789 3.75 3.75v7.5c0 2.0711-1.6789 3.75-3.75 3.75h-7.5c-2.0711 0-3.75-1.6789-3.75-3.75v-7.5c0-.0104 0-.0208.0001-.0312-.0167-2.0567-1.6892-3.7188-3.7498-3.7188-.0097 0-.0194 0-.0291 0h-7.4712c-2.0711 0-3.75-1.6789-3.75-3.75z"
                          fill="url(#d)"
                        />
                      </g>
                    </g>
                    <rect
                      height="46"
                      rx="11"
                      stroke="#26577C"
                      stroke-width="0"
                      width="46"
                      x="1"
                      y="1"
                    />
                  </g>
                </svg>
              </div>
              <div className="logo-title text-sm">
                <p>BrewCode</p>
              </div>
            </div>
            <div
              className="collapse-btn absolute right-1 bg-white rounded shadow p-[2px] z-999 hover:cursor-pointer active:bg-[lightgrey]"
              onClick={handleCollapse}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="collapse-icon"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#686D76"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-skip-back"
              >
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </div>
          </div>
          <div className="General-section-wrapper">
            <Divider className="helper-text" orientation="left" plain>
              <p className="text-[0.8em] text-[#B4B4B8]">General</p>
            </Divider>
            <div className="link-wrapper p-3 flex flex-col gap-1">
              <div className="links general-link flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" />
                  </svg>
                </span>
                <span className="link-text">Dashboard</span>
              </div>
              <div className="links payment-link flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"
                  />
                </svg>
                <span className="link-text">Payments</span>
              </div>
              <div className="links transactions-link flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <rect
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    x="48"
                    y="80"
                    width="416"
                    height="384"
                    rx="48"
                  />
                  <circle cx="296" cy="232" r="24" />
                  <circle cx="376" cy="232" r="24" />
                  <circle cx="296" cy="312" r="24" />
                  <circle cx="376" cy="312" r="24" />
                  <circle cx="136" cy="312" r="24" />
                  <circle cx="216" cy="312" r="24" />
                  <circle cx="136" cy="392" r="24" />
                  <circle cx="216" cy="392" r="24" />
                  <circle cx="296" cy="392" r="24" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    stroke-linecap="round"
                    d="M128 48v32M384 48v32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M464 160H48"
                  />
                </svg>
                <span className="link-text">Transactions</span>
              </div>
              <div className="links cards-link flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="96"
                    width="416"
                    height="320"
                    rx="56"
                    ry="56"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="60"
                    d="M48 192h416M128 300h48v20h-48z"
                  />
                </svg>
                <span className="link-text">Cards</span>
              </div>
              <Divider className="helper-text" orientation="left" plain>
                <p className="text-[0.8em] text-[#B4B4B8]">Support</p>
              </Divider>
              <div className="links general-link flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M344 280l88-88M232 216l64 64M80 320l104-104"
                    />
                    <circle
                      cx="456"
                      cy="168"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle
                      cx="320"
                      cy="304"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle
                      cx="208"
                      cy="192"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle
                      cx="56"
                      cy="344"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </span>
                <span className="link-text">Capital</span>
              </div>
              <div className="links payment-link flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="144"
                    width="416"
                    height="288"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                </svg>
                <span className="link-text">Vaults</span>
              </div>
              <div className="links transactions-link flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M32 32v432a16 16 0 0016 16h432"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <rect
                    x="96"
                    y="224"
                    width="80"
                    height="192"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <rect
                    x="240"
                    y="176"
                    width="80"
                    height="240"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <rect
                    x="383.64"
                    y="112"
                    width="80"
                    height="304"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
                <span className="link-text">Reports</span>
              </div>
              <div className="links cards-link flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="19"
                  height="19"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <rect
                    x="64"
                    y="160"
                    width="384"
                    height="112"
                    rx="32"
                    ry="32"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
                <span className="link-text">Earn</span>
              </div>
              <Divider className="helper-text" orientation="left" plain>
                <p className="text-[0.8em] text-[#B4B4B8]">User</p>
              </Divider>
              <div className="links cards-link flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  width="19"
                  height="19"
                  viewBox="0 0 512 512"
                >
                  <path d="M456.7 242.27l-26.08-4.2a8 8 0 01-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 013.9-8.62l23.09-12.82a8.05 8.05 0 003.9-9.92l-4-11a7.94 7.94 0 00-9.4-5l-25.89 5a8 8 0 01-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 01.7-9.52l17.29-19.94a8 8 0 00.3-10.62l-7.49-9a7.88 7.88 0 00-10.5-1.51l-22.69 13.63a8 8 0 01-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 01-2.5-9.11l9.4-24.75A8 8 0 00365 78.77l-10.2-5.91a8 8 0 00-10.39 2.21l-16.64 20.84a7.15 7.15 0 01-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 01304 87l.4-26.45a8.07 8.07 0 00-6.6-8.42l-11.59-2a8.07 8.07 0 00-9.1 5.61l-8.6 25.05a8 8 0 01-7.79 5.41h-9.8a8.07 8.07 0 01-7.79-5.41l-8.6-25.05a8.07 8.07 0 00-9.1-5.61l-11.59 2a8.07 8.07 0 00-6.6 8.42l.4 26.45a8 8 0 01-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 00156.75 73l-10.2 5.91a7.94 7.94 0 00-3.3 10.09l9.4 24.75a8.06 8.06 0 01-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 01-9.39.9L111 116.14a8 8 0 00-10.5 1.51l-7.49 9a8 8 0 00.3 10.62l17.29 19.94a8 8 0 01.7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 01-8.59 4.11l-25.89-5a8 8 0 00-9.4 5l-4 11a8.05 8.05 0 003.9 9.92L85.58 213a7.94 7.94 0 013.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 01-6.6 6.82l-26.08 4.2a8.09 8.09 0 00-7.1 7.92v11.72a7.86 7.86 0 007.1 7.92l26.08 4.2a8 8 0 016.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 01-3.9 8.62L62.49 311.7a8.05 8.05 0 00-3.9 9.92l4 11a7.94 7.94 0 009.4 5l25.89-5a8 8 0 018.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 01-.7 9.52l-17.29 19.96a8 8 0 00-.3 10.62l7.49 9a7.88 7.88 0 0010.5 1.51l22.69-13.63a8 8 0 019.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 012.5 9.11l-9.4 24.75a8 8 0 003.3 10.12l10.2 5.91a8 8 0 0010.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 015.49 7.71l-.4 26.45a8.07 8.07 0 006.6 8.42l11.59 2a8.07 8.07 0 009.1-5.61l8.6-25a8 8 0 017.79-5.41h9.8a8.07 8.07 0 017.79 5.41l8.6 25a8.07 8.07 0 009.1 5.61l11.59-2a8.07 8.07 0 006.6-8.42l-.4-26.45a8 8 0 015.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 00355 439l10.2-5.91a7.93 7.93 0 003.3-10.12l-9.4-24.75a8.08 8.08 0 012.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 019.39-.9L401 395.66a8 8 0 0010.5-1.51l7.49-9a8 8 0 00-.3-10.62l-17.29-19.94a8 8 0 01-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 018.59-4.11l25.89 5a8 8 0 009.4-5l4-11a8.05 8.05 0 00-3.9-9.92l-23.09-12.82a7.94 7.94 0 01-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 016.6-6.82l26.08-4.2a8.09 8.09 0 007.1-7.92V250a8.25 8.25 0 00-7.27-7.73zM256 112a143.82 143.82 0 01139.38 108.12A16 16 0 01379.85 240H274.61a16 16 0 01-13.91-8.09l-52.1-91.71a16 16 0 019.85-23.39A146.94 146.94 0 01256 112zM112 256a144 144 0 0143.65-103.41 16 16 0 0125.17 3.47L233.06 248a16 16 0 010 15.87l-52.67 91.7a16 16 0 01-25.18 3.36A143.94 143.94 0 01112 256zm144 144a146.9 146.9 0 01-38.19-4.95 16 16 0 01-9.76-23.44l52.58-91.55a16 16 0 0113.88-8H379.9a16 16 0 0115.52 19.88A143.84 143.84 0 01256 400z" />
                </svg>
                <span className="link-text">Settings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bot-fx p-[5px] flex flex-col ">
          <div className="user-card  flex-wrap flex items-center justify-between  gap-1 ">
            <div className="user-name flex flex-wrap items-center gap-2 ">
              <Avatar
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                style={{
                  backgroundColor: "#FFFDB5",
                  width: "20px",
                  height: "20px",
                }}
              />
              <div>
                <p>A. Ibrahimi</p>
                <p>email@email.com</p>
              </div>
            </div>
            <Tooltip
              placement="right"
              title={"Logout"}
              arrow={false}
              color={"lightgrey"}
              key={"black"}
            >
              <div className="hover:bg-[#F6F5F2] p-[5px] rounded-md hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="12px"
                  height="12px"
                >
                  <path
                    d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </div>
            </Tooltip>
          </div>
          <p className="text-[8px] m-[2px] text-center text-[gray]">
            @2024 Developed by Arsalan Ibrahimi.
          </p>
        </div>
      </div>
      <div className=" main-content">
        <div className="header flex items-center justify-between  bg-[#F6F5F2]  border shadow-sm p-3  ">
          <div className="breadcrums-wrap">
            <Breadcrumb
              items={[
                {
                  href: "",
                  title: <HomeOutlined />,
                },
                {
                  href: "",
                  title: (
                    <>
                      <UserOutlined />
                      <span>Application List</span>
                    </>
                  ),
                },
                {
                  title: "Application",
                },
              ]}
            />
          </div>
          <div className="flex items-center gap-2">
            <Input addonAfter={<SearchOutlined />} placeholder="search" />
            <a href="#">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
              >
                <Badge count={5} size="small">
                  <BellOutlined />
                </Badge>
              </Dropdown>
            </a>
          </div>
        </div>

        <div className="Card-stats-top rounded border m-2 flex justify-between bg-[#006769]  h-[20dvh]">
          <div className="p-3 p-l-[10px] w-[70%]">
            <StatsZero />
          </div>
          <div className="bg-pattern flex items-center w-[30%]">
            <div className="Buttons h-full flex items-center gap-2">
              <Button type="primary">Send</Button>
              <Button type="primary">Receive</Button>
            </div>
          </div>
        </div>

        <div className="chart-wrapper  p-2 border rounded-md m-2 ">
          <div className="dash-1 p-2 flex gap-[5px] border-r-1 rounded-md">
            <Chart />
            <div className=" rounded  p-1">
              <div className="income-wrapper ">
                <Statsone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
