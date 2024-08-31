import Slider from "react-slick";
const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div className="mx-5 py-20 rounded-2xl lg:bg-white lg:p-20 lg:w-full">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <span className="hidden sm:block mx-auto w-2/3   h-1 bg-orange-500"></span>
      </div>
      <p className="my-8 leading-relaxed">
        Hello there! I&#39;m thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <div>
        <h1 className="text-4xl font-bold">What I do!</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-3 lg:items-center">
          {/* Web Develop */}
          <div className="bg-[#F2F7FC] flex flex-col rounded-xl px-5 border my-5">
            <div className="flex flex-row items-center mt-5">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z"
                  fill="#E80505"
                />
              </svg>
              <h3 className="text-xl font-bold ml-2">Web Development</h3>
            </div>
            <div className="my-5">
              <Slider {...settings}>
                <img src="../src/assets/web/Screenshot (25).png" alt="" />
                <img src="../src/assets/web/Screenshot (26).png" alt="" />
                <img src="../src/assets/web/Screenshot (27).png" alt="" />
                <img src="../src/assets/web/Screenshot (28).png" alt="" />
                <img src="../src/assets/web/Screenshot (29).png" alt="" />
              </Slider>
            </div>
          </div>
          {/* Web Develop End */}
          {/* App Develop */}
          <div className="bg-[#F2F7FC] flex flex-col rounded-xl px-5 border my-5">
            <div className="flex flex-row items-center mt-5">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3ZM3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM14 4C14 3.73478 14.1054 3.48043 14.2929 3.29289C14.4804 3.10536 14.7348 3 15 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5H15C14.7348 5 14.4804 4.89464 14.2929 4.70711C14.1054 4.51957 14 4.26522 14 4ZM7 9C7 8.20435 7.31607 7.44129 7.87868 6.87868C8.44129 6.31607 9.20435 6 10 6C10.7956 6 11.5587 6.31607 12.1213 6.87868C12.6839 7.44129 13 8.20435 13 9C13 9.79565 12.6839 10.5587 12.1213 11.1213C11.5587 11.6839 10.7956 12 10 12C9.20435 12 8.44129 11.6839 7.87868 11.1213C7.31607 10.5587 7 9.79565 7 9ZM10 4C8.67392 4 7.40215 4.52678 6.46447 5.46447C5.52678 6.40215 5 7.67392 5 9C5 10.3261 5.52678 11.5979 6.46447 12.5355C7.40215 13.4732 8.67392 14 10 14C11.3261 14 12.5979 13.4732 13.5355 12.5355C14.4732 11.5979 15 10.3261 15 9C15 7.67392 14.4732 6.40215 13.5355 5.46447C12.5979 4.52678 11.3261 4 10 4Z"
                  fill="#FF9C1A"
                />
              </svg>

              <h3 className="text-xl font-bold ml-2">App Development</h3>
            </div>
            <div className=" my-5">
              <Slider {...settings}>
                <img
                  src="../src/assets/appdevelopment/Screenshot (11).png"
                  alt=""
                />
                <img
                  src="../src/assets/appdevelopment/Screenshot (17).png"
                  alt=""
                />
              </Slider>
            </div>
          </div>
          {/* App Develop End */}
          {/* photography */}
          <div className="bg-[#F2F7FC] flex flex-col rounded-xl px-5 border my-5">
            <div className="flex flex-row items-center mt-5">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z"
                  fill="#E80505"
                />
              </svg>
              <h3 className="text-xl font-bold ml-2">Photography</h3>
            </div>
            <div className=" my-5 h-52 overflow-hidden">
              <Slider {...settings}>
                <img src="../src/assets/fotografi/1.jpg" alt="" />
                <img src="../src/assets/fotografi/2.jpg" alt="" />
                <img src="../src/assets/fotografi/3.jpeg" alt="" />
                <img src="../src/assets/fotografi/4.jpg" alt="" />
                <img src="../src/assets/fotografi/5.jpg" alt="" />
                <img src="../src/assets/fotografi/6.jpg" alt="" />
              </Slider>
            </div>
          </div>
          {/* Photography End*/}
        </div>
      </div>
    </div>
  );
};

export default index;
