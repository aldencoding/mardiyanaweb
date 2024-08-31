function Login() {
  return (
    <div className="flex flex-row justify-center items-center h-screen mx-10 gap-x-10 sm:mx-14">
      <div className="hidden md:block w-3/4 max-w-lg">
        <img
          src="https://cdn.pixabay.com/photo/2024/08/28/14/50/zombie-9004239_1280.png"
          className=""
        />
      </div>
      <form>
        {/* <span className="hidden sm:block md:hidden bg-yellow-300">640px</span>
        <span className="hidden md:block lg:hidden bg-yellow-300">768px</span>
        <span className="hidden lg:block bg-yellow-300">1024px</span> */}
        <h2 className="text-3xl lg:text-4xl font-extrabold">Login</h2>
        <div className="flex flex-col my-3">
          <h4 className="text-xl lg:text-2xl font-semibold ">
            login to your account
          </h4>
          <span className="mt-1 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quo
            et ducimus?
          </span>
          <div className="flex flex-col">
            <label className="font-medium">username</label>
            <input
              type="text"
              placeholder="username"
              className="h-10 sm:h-12 rounded-lg p-5 mb-5"
            />
            <label className="font-medium">password</label>
            <input
              type="password"
              placeholder="password"
              className="h-10 sm:h-12 rounded-lg p-5 mb-5"
            />
            <div className="flex justify-center w-full h-12 mt-5 lg:mt-8 bg-blue-500 text-center rounded-xl hover:opacity-75 hover:cursor-pointer">
              <button className="text-white font-semibold" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
