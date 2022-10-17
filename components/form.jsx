import React from "react";

const Form = () => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className="xl:w-96">
          <input type="text" className="border border-black form-control py-4 px-5 w-full rounded placeholder:text-stone-900
          placeholder:text-black placeholder:text-xs placeholder:font-semibold my-6"
          placeholder="Paste your long url." />

          <input type="text" className="border border-black form-control py-4 px-5 w-full rounded placeholder:text-stone-900
          placeholder:text-black placeholder:text-xs placeholder:font-semibold mb-3"
          placeholder="Create your custom url." />
          <p className="text-xs font-semibold text-center text-[#2C2C2C] tracking-wider"><span className="text-[#CB2F2F]">Note:</span> max character length is less than 10 character.</p>
          <div className="flex justify-center pt-8">
            <button className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 px-5 py-2 rounded text-sm">Let <span className="text-[#BD279C]">magic</span> happen!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
