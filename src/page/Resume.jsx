function Resume() {
  return (
    <div className="mx-5 py-20 rounded-2xl lg:bg-white lg:p-20 lg:w-full">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl font-bold">Resume</h1>
        <span className="hidden sm:block mx-auto w-2/3 h-1 bg-orange-500"></span>
      </div>
      {/* Education */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div className="mt-5">
          <div>
            <h3 className="text-xl font-bold my-2">Education</h3>
          </div>
          <ul className="bg-[#FFE3BF] p-5 mb-5 rounded-xl border flex flex-col gap-y-2">
            <li className="opacity-60">2020</li>
            <li className="font-medium">FrontEnd Developer</li>
            <li className="font-medium">BackEnd Developer</li>
          </ul>
          <ul className="bg-[#FFE3BF] p-5 mb-5 rounded-xl border flex flex-col gap-y-2">
            <li className="opacity-60">2015-2018</li>
            <li className="font-medium">SMK-Al Manar Teknik</li>
            <li className="font-medium">Komputer Jaringan</li>
          </ul>
        </div>
        {/* Education end */}
        {/* Experience */}
        <div className="mt-5">
          <div>
            <h3 className="text-xl font-bold my-2">Experience</h3>
          </div>
          <ul className="bg-[#FFE3BF] p-5 mb-5 rounded-xl border flex flex-col gap-y-2">
            <li className="opacity-60">2020</li>
            <li className="font-medium">FrontEnd Developer</li>
            <li className="font-medium">BackEnd Developer</li>
          </ul>
          <ul className="bg-[#FFE3BF] p-5 mb-5 rounded-xl border flex flex-col gap-y-2">
            <li className="opacity-60">2018-2020</li>
            <li className="font-medium">Operator Produksi</li>
            <li className="font-medium">Elektronik</li>
          </ul>
        </div>
      </div>
      {/* Experience end */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="mt-10">
          <div className="">
            <h3 className="text-xl font-bold">Work Skills</h3>
          </div>
          <ul className="grid grid-cols-3">
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              NEXT.js
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              React.js
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              CSS 3
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Tailwind CSS
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Figma
            </li>
            <li className="skills-list w-24 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              JavaScript
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Mongo DB
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              SQL
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Angular
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Android
            </li>
            <li className="skills-list w-20 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Git
            </li>
          </ul>
        </div>
        {/* Experience end */}
        <div className="mt-5">
          <div>
            <h3 className="text-xl font-bold">Soft Skills</h3>
          </div>
          <ul className="grid grid-cols-2">
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Time Management
            </li>
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Impeccable Communication
            </li>
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Research
            </li>
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Mentorship
            </li>
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Flexibility
            </li>
            <li className="skills-list w-36 h-14 flex justify-center items-center bg-[#E1E8EF] m-2  text-center">
              Writing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
