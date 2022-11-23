import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Link = () => {
  const data = useRouter();
  const [shorturl, setShortUrl] = useState([]);

  const getUrl = () => {
    axios
      .get(`https://man.romodeus.site/manifest/${data.query.key}`)
      .then((response) => {
        console.log(response);
        setShortUrl(response.data.data.custom_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUrl();
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText({ shorturl }),
      Swal.fire("Link Copied!", "success copying link to clipboard", "success");
  };

  return (
    <div className="pt-32 md:pt-40 xl:pt-16">
      <div className="flex justify-center">
        <div className="xl:w-96 w-72 md:w-80">
          <div className="border border-black py-6 px-5 w-full rounded">
            <p className="text-black text-xs font-semibold">{shorturl}</p>
          </div>
          <div className="flex justify-center pt-8">
            <button
              className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 px-5 py-2 rounded text-sm"
              onClick={copyLink}
            >
              Copy <span className="text-[#BD279C]">URL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
