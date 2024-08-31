function Contact() {
  return (
    <div className="mx-5 py-20 rounded-2xl lg:bg-white lg:p-20 lg:w-full">
      <div>
        <div className="flex flex-row items-center">
          <h3 className="text-4xl font-bold my-2">Contact</h3>
          <span className="hidden sm:block mx-auto w-2/3 h-1 bg-orange-500"></span>
        </div>
        <div className="mt-5 lg:grid lg:grid-cols-2 lg:gap-5">
          <ul className="bg-[#FFE3BF] p-5 lg:p-10 mb-5 rounded-xl border">
            <li className="font-medium">Phone</li>
            <li className="font-medium">+62895364454843</li>
          </ul>
          <ul className="bg-[#FFE3BF] p-5 lg:p-10 mb-5 rounded-xl border">
            <li className="font-medium">Email</li>
            <li className="font-medium">dmardiyana123@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F8FBFB] flex flex-col justify-start p-5 rounded-xl border my-10">
        <p>
          I am always open to discussing{" "}
          <b className="font-bold">
            new projects, opportunities in tech world, partnerships
          </b>{" "}
          and more so <b className="font-bold">mentorship.</b>{" "}
        </p>
        <form action="" className="flex flex-col">
          <label className="font-semibold ring-0">Name: </label>
          <input type="text" className="bg-transparent w-full border-b my-3" />
          <label className="font-semibold ring-0">Email: </label>
          <input type="email" className="bg-transparent w-full border-b my-3" />
          <label className="font-semibold ring-0">Message: </label>
          <input type="text" className="bg-transparent w-full border-b my-3" />
          <button
            type="submit"
            className="my-3 text-sm font-semibold px-5 py-3 border border-orange-500 rounded-2xl sm:w-1/2 self-center hover:bg-orange-500 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
