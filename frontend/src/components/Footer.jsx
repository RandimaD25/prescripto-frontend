import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="fle flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            vero est aperiam dignissimos assumenda laboriosam dolorem maiores
            veritatis illo modi culpa animi ullam consequatur, aliquid totam
            deleniti aut. Animi, labore!
          </p>
        </div>

        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94563422334</li>
            <li>prescriptochanelling@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/* Copy right text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
