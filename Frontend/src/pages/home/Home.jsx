import React from "react";
function Home() {
  return (
    <>
      <div>
        <div>
          <img className="" src="banner.webp" alt="" />
        </div>
        <br />
        <div className="text-center">
          <h1 className="text-5xl  ">
            <span className="text-green-600">We are</span> the Democratic Party.
          </h1>
          <h2 className="text-2xl">
            We’re fighting for a brighter, more equal future: rolling up our
            sleeves and <br /> organizing everywhere to build a better Pakistan
            for all.
          </h2>
        </div>

        <div className="flex text-center justify-evenly mt-5 mx-4  ">
          <div className="mx-10">
            <h1 className="mb-3 text-3xl "> who is Imran Khan</h1>
            <p>
              Imran Khan, born in Lahore in 1952, achieved cricket greatness as
              Pakistan's captain, leading the team to its first World Cup
              victory in 1992. Transitioning to politics, he founded the
              Pakistan Tehreek-e-Insaf (PTI) in 1996. Elected as Prime Minister
              in 2018, Khan has focused on economic reforms, anti-corruption,
              and social welfare.
            </p>
          </div>
          <div className="mx-10">
            <h1 className="mb-3 text-3xl ">Our Ideology</h1>
            <p>
              PTI (Pakistan Tehreek-e-Insaf) envisions a transformative ideology
              centered on justice, accountability, and political transparency.
              Committed to fostering self-reliance and public trust, PTI
              advocates for a just society, religious and cultural freedom, and
              the eradication of extremism. The party's mission is rooted in
              creating a free nation.
            </p>
          </div>

          <div className="mx-10">
            <h1 className="mb-3 text-3xl">Our Mission</h1>
            <p>
              PTI's mission is to build a just and transparent society,
              emphasizing self-reliance. Committed to political stability, the
              party addresses root causes of extremism, promotes religious
              tolerance, and values cultural diversity. The mission is rooted in
              restoring people's sovereign right to choose options aligned with
              their religious values.
            </p>
          </div>
        </div>
        <br />
        <br />

        <div className="text-center">
          <h1 className="text-5xl pt-2 text-green-600 ">Our Priorities</h1>
          <br />

          <hr class="border-t border-black font-bold" />
          <br />

          <div className="grid grid-cols-12 gap-5">
            <div className="bg-white text-2xl overflow-hidden  rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 hover:cursor-pointer  hover:underline text-green-700 col-span-4 max-sm:col-span-12">
              <img src="doctors.jpg" className="h-60 w-96 " alt="" />
              <h2 className="p-5">Building up your health system</h2>
            </div>

            <div className="bg-white text-2xl font-bold overflow-hidden  shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer  rounded-lg hover:underline text-green-700 col-span-4 max-sm:col-span-12">
              <img src="climate.jpg" className="h-60" alt="" />
              <h1 className="p-5">Meeting the climate challenge</h1>
            </div>

            <div className="bg-white text-2xl rounded-lg overflow-hidden  shadow-lg font-bold transition-transform transform hover:scale-105 hover:cursor-pointer  hover:underline text-green-700 col-span-4 max-sm:col-span-12">
              <img src="ik-balochisan.jpg" className=" h-60" alt="" />
              <h1 className="p-5">
                Working in partnership for development of balochistan{" "}
              </h1>
            </div>
          </div>

          <div className="flex flex-1 mb-5 gap-5  justify-around mx-5 text-center ">
            <div className="bg-white text-2xl   overflow-hidden  rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 hover:cursor-pointer  hover:underline text-green-700">
              <img src="iman-khan.webp" className="h-60 w-96 " alt="" />
              <h1 className="p-5">Creating a strong economy</h1>
            </div>

            <div className="bg-white text-2xl overflow-hidden  shadow-lg font-bold transition-transform transform hover:scale-105 hover:cursor-pointer rounded-lg hover:underline text-green-700">
              <img src="kids.jpg" className="h-60  " alt="" />
              <h1 className=" p-5">Fixing the cost of living </h1>
            </div>

            <div className="bg-white text-2xl rounded-lg overflow-hidden  shadow-lg font-bold transition-transform transform hover:scale-105 hover:cursor-pointer  hover:underline text-green-700">
              <img src="housing.jpg" className=" h-60  " alt="" />
              <h1 className="p-5 ">Making housing affordable </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
