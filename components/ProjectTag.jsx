import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-500 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-xl border-2 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-md md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
