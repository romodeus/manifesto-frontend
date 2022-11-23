import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [longurl, setLongUrl] = useState([]);
  const [customurl, setCustomUrl] = useState([]);

  const postUrl = () => {
    axios
      .post("https://man.romodeus.site/manifest", {
        custom_url: customurl,
        real_url: longurl,
      })
      .then((res) => {
        Swal.fire("Yeay!", "Success changing your URL :)", "success");
        Router.push({
          pathname: "/url",
          query: {
            key: customurl,
          },
        });
      })
      .catch((err) => {
        alert("gagal");
        Swal.fire("Sorry :(", "failed to change your URL", "error");
        Router.push("/error");
      });
  };

  return (
    <div className="pt-24 md:pt-32 xl:pt-10">
      <div className="flex justify-center">
        <div className="xl:w-96 w-72 md:w-80">
          <input
            type="text"
            className="border border-black form-control py-4 px-5 w-full rounded placeholder:text-stone-900
          placeholder:text-xs placeholder:font-semibold my-6"
            placeholder="Paste your long url."
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <input
            type="text"
            className="border border-black form-control py-4 px-5 w-full rounded placeholder:text-stone-900
          placeholder:text-xs placeholder:font-semibold mb-3"
            placeholder="Create your custom url."
            onChange={(e) => setCustomUrl(e.target.value)}
          />

          {/* <p className="text-xs font-semibold text-center text-[#2C2C2C] tracking-wider"><span className="text-[#CB2F2F]">Note:</span> max character length is less than 10 character.</p> */}
          <div className="flex justify-center pt-8">
            <button
              className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 px-5 py-2 rounded text-sm"
              onClick={postUrl}
            >
              Let <span className="text-[#BD279C]">magic</span> happen!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
