import React, { useEffect, useState } from "react";
import ShortLink from "./ShortLink";
import Spinner from "./Spinner";

const Shortener = () => {
  const getStoredLinks = JSON.parse(localStorage.getItem("links")) ?? [];
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState(getStoredLinks);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const shortenLink = async (e) => {
    e.preventDefault();
    if (url.replaceAll(" ", "") === "") {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const fetchedLink = await res.json();
      if (fetchedLink.ok) {
        setLinks([...links, fetchedLink.result]);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLink = (linkToDelete) => {
    const updatedLinks = links.filter((link) => link !== linkToDelete);
    setLinks(updatedLinks);
  };

  return (
    <div className="mx-5 -mt-24 md:-mt-20 lg:mx-20 xl:mx-36">
      <form onSubmit={shortenLink}>
        <div className="shortener flex flex-col gap-7 rounded-lg bg-darkviolet bg-cover bg-right-top bg-no-repeat px-6 py-8 md:flex-row md:bg-left-top md:px-12 md:py-10">
          <div className="relative w-full">
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onFocus={() => setError(false)}
              onChange={(e) => setUrl(e.target.value)}
              className={`w-full rounded-md border-4 border-solid px-4 py-3 transition-all duration-300 focus:border-cyan focus:outline-none focus:placeholder:invisible focus:placeholder:left-10 focus:placeholder:opacity-0 md:px-7 md:py-4 ${
                error ? "border-red" : "border-transparent"
              }`}
            />
            <span
              className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-grayishviolet transition-all duration-300 focus:placeholder:invisible focus:placeholder:left-10 focus:placeholder:opacity-0 md:left-7 ${
                url !== "" && "invisible left-10 opacity-0"
              } ${error && "text-red"}`}
            >
              Shorten a url here...
            </span>
            <span
              className={`absolute -bottom-6 left-2 z-30 w-max text-sm text-red transition-all duration-300 ${
                error ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              Please add valid a url
            </span>
          </div>
          <button className="w-full rounded-md bg-cyan px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#63dddd] md:w-[180px] md:px-8 md:py-4">
            {loading ? <Spinner /> : "Shorten It!"}
          </button>
        </div>
      </form>

      <div
        aria-live={links.length !== 0 ? "polite" : "off"}
        className="mt-5 flex flex-col gap-5"
      >
        {links.length !== 0 &&
          links.map((link) => (
            <ShortLink
              key={links.indexOf(link)}
              data={link}
              onDelete={handleDeleteLink}
            />
          ))}
      </div>
    </div>
  );
};

export default Shortener;
