const Profile = () => {
  return (
    <div className="flex flex-col p-5 lg:p-10 lg:bg-[#FFFFFF] lg:rounded-3xl lg:border-2 lg:w-max">
      <div className="flex flex-col justify-center items-center">
        {/* Profile Picture */}
        <img
          src="../src/assets/profil.jpeg"
          alt=""
          className="w-52 rounded-xl border sm:w-64 lg:w-36"
        />
        <h3 className="text-2xl font-bold mt-3 sm:text-4xl lg:text-2xl sm:mt-5">
          Den Mardiyana
        </h3>
        <p className="text-sm opacity-60">FullStack Developer</p>
        {/* Sosial media list */}
        <ul className="w-full flex flex-row justify-center gap-3 my-5">
          <li className="bg-[#F2F7FC] p-5 rounded-xl">
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75027 12.0825H10.2308L11.2231 8.11357H7.75027V6.12912C7.75027 5.10712 7.75027 4.14467 9.73472 4.14467H11.2231V0.810787C10.8996 0.768121 9.67816 0.671875 8.38827 0.671875C5.69438 0.671875 3.78137 2.31599 3.78137 5.33534V8.11357H0.804688V12.0825H3.78137V20.5164H7.75027V12.0825Z"
                fill="#1877F2"
              />
            </svg>
          </li>
          <li className="bg-[#F2F7FC] p-5 rounded-xl">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.929688"
                y="0.671875"
                width="19.8445"
                height="19.8453"
                rx="8.26855"
                fill="#F2F7FC"
              />
              <path
                d="M5.88945 4.80688C5.88923 5.24547 5.71479 5.66601 5.40451 5.97599C5.09422 6.28596 4.67351 6.45998 4.23491 6.45976C3.79632 6.45954 3.37578 6.2851 3.06581 5.97482C2.75583 5.66453 2.58181 5.24382 2.58203 4.80523C2.58225 4.36664 2.75669 3.9461 3.06698 3.63612C3.37726 3.32614 3.79798 3.15212 4.23657 3.15234C4.67516 3.15256 5.0957 3.327 5.40568 3.63729C5.71565 3.94757 5.88967 4.36829 5.88945 4.80688ZM5.93906 7.68434H2.63164V18.0366H5.93906V7.68434ZM11.1648 7.68434H7.8739V18.0366H11.1317V12.6041C11.1317 9.57783 15.0758 9.2967 15.0758 12.6041V18.0366H18.3419V11.4796C18.3419 6.3779 12.5043 6.56808 11.1317 9.07345L11.1648 7.68434Z"
                fill="#0077B5"
              />
            </svg>
          </li>
          <li className="bg-[#F2F7FC] p-5 rounded-xl">
            <svg
              width="17"
              height="17"
              viewBox="15 50 350 140"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
            </svg>
          </li>
          <li className="bg-[#F2F7FC] p-5 rounded-xl">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8.27246 0.326172C3.70408 0.326172 0.00390761 4.02635 0.00390761 8.59472C0.00291203 10.3304 0.548473 12.0224 1.5632 13.4305C2.57793 14.8387 4.01029 15.8916 5.65711 16.4399C6.07054 16.5119 6.22599 16.2638 6.22599 16.0463C6.22599 15.8504 6.21524 15.1996 6.21524 14.5067C4.13818 14.8896 3.60073 14.0007 3.43536 13.5352C3.34192 13.297 2.93924 12.5636 2.58783 12.3668C2.29843 12.2122 1.885 11.8294 2.57708 11.8195C3.22864 11.8087 3.69333 12.4189 3.84878 12.667C4.59295 13.9172 5.78114 13.5658 6.25658 13.3491C6.32935 12.8117 6.54598 12.4503 6.78412 12.2436C4.94437 12.0369 3.02193 11.3233 3.02193 8.16062C3.02193 7.261 3.34192 6.51766 3.86945 5.93804C3.78677 5.73132 3.49737 4.8838 3.95214 3.74687C3.95214 3.74687 4.64422 3.53023 6.22599 4.59522C6.8991 4.4084 7.59457 4.31438 8.29313 4.31575C8.99596 4.31575 9.69878 4.40835 10.3603 4.5944C11.942 3.51949 12.6341 3.7477 12.6341 3.7477C13.0889 4.88462 12.7995 5.73215 12.7168 5.93886C13.2435 6.51766 13.5643 7.25108 13.5643 8.16062C13.5643 11.3341 11.632 12.0369 9.79139 12.2436C10.0915 12.5016 10.3503 12.9977 10.3503 13.7733C10.3503 14.8788 10.3396 15.7677 10.3396 16.0472C10.3396 16.2638 10.495 16.5218 10.9085 16.4391C12.5496 15.8848 13.9757 14.8298 14.9859 13.4227C15.9962 12.0155 16.5398 10.327 16.5402 8.59472C16.5402 4.02635 12.84 0.326172 8.27163 0.326172H8.27246Z"
                fill="#0B0909"
              />
            </svg>
          </li>
        </ul>
        {/* Contact Information */}
        <ul className="bg-[#F2F5F9] flex flex-col justify-center p-5 py-10 rounded-2xl text-wrap">
          {/* phone Number */}
          <li className="flex flex-row items-center pb-5 border-b">
            <div className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F19E39"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </div>
            <ul className="flex flex-col">
              <li className="opacity-50 font-bold sm:text-xl lg:text-base">
                Phone
              </li>
              <li className="font-bold sm:text-xl lg:text-sm">
                +62895364454843
              </li>
            </ul>
          </li>
          {/* Email */}
          <li className="flex flex-row items-center py-5 border-b">
            <div className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F19E39"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </div>
            <ul className="flex flex-col">
              <li className="opacity-50 font-bold sm:text-xl lg:text-base">
                Email
              </li>
              <li className="font-bold sm:text-xl lg:text-sm">
                dmardiyana123@gmail.com
              </li>
            </ul>
          </li>
          {/* Location */}
          <li className="flex flex-row items-center py-5 border-b">
            <div className="p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F19E39"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            </div>
            <ul className="flex flex-col">
              <li className="opacity-50 font-bold sm:text-xl lg:text-base">
                Location
              </li>
              <li className="font-bold sm:text-xl lg:text-sm">
                Location Jawa Barat, Indonesia
              </li>
            </ul>
          </li>
          <button className="mt-10 flex px-10 py-4 bg-[#FF9C1B] self-center rounded-3xl text-white">
            <span className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F2F7FC"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </span>
            Download Resume
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
