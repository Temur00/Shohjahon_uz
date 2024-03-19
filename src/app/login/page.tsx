import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="mx-auto w-[500px] pb-[80px]">
          <img src="gif.gif" alt="" />
          <label htmlFor="email" className="block w-full pt-[40px] text-[24px]">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email addres"
            className="block w-full h-[36px] text-[24px] rounded-sm border-gray-400 border-solid"
          />
          <label htmlFor="password" className="block w-full text-[24px]">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="block w-full h-[36px] text-[24px] rounded-sm border-gray-400 border-solid"
          />
          <button className="w-full py-[16px] mt-[20px] bg-gray-600 text-white hover:bg-gray-500">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
