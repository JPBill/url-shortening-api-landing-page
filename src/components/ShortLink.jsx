import React, { useEffect, useState } from "react";

const ShortLink = ({ data, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(data.full_short_link);
    setCopied(true);
  };

  const handleDelete = () => {
    onDelete(data);
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="flex w-full flex-col rounded-md bg-white lg:flex-row lg:items-center lg:justify-between lg:px-5 lg:py-4">
      <a
        href={data.original_link}
        target="_blank"
        rel="noreferrer noopener"
        className="block break-words border-b-2 border-solid border-gray px-4 pb-4 pt-5 font-medium transition-colors hover:text-grayishviolet sm:px-6 lg:border-none lg:p-0"
      >
        {data.original_link}
      </a>
      <div className="flex flex-col gap-4 px-4 pb-6 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 lg:p-0">
        <a
          href={data.full_short_link}
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-cyan transition-colors hover:text-opacity-50"
        >
          {data.full_short_link}
        </a>
        <div className="flex flex-col gap-2 sm:ml-2 md:flex-row">
          <button
            onClick={copyLink}
            className={`rounded-md px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-80 ${
              copied ? "bg-verydarkblue" : "bg-cyan"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleDelete}
            className="rounded-md bg-red px-4 py-3 font-semibold text-white transition-all hover:bg-opacity-80"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortLink;
