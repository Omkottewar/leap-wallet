import { useState } from "react";

const CommonFAQ = ({ accordionData }) => {
  const [showAccordion, setShowAccordion] = useState(null);

  const handleClick = (id) => {
    setShowAccordion(showAccordion === id ? null : id);
  };

  return (
    <div className="lg:flex lg:flex-col lg:gap-16 mt-32 justify-between items-start w-[95%] lg:w-6/12 mx-auto">
      {/* Header Section */}
      <div className="mb-8 lg:mb-0">
        <h1 className="font-bold text-3xl lg:text-4xl">FAQs</h1>
        <p className="text-[#1FA64E] mt-2 text-lg">Support</p>
      </div>

      {/* Accordion Section */}
      <div className="flex flex-col gap-6 w-full ">
        {accordionData?.map((item, index) => (
          <div
            className={`bg-[#cbf5d1] rounded-xl shadow-lg px-6 py-8 cursor-pointer transition-all duration-300 ${
              showAccordion === index ? "lg:h-auto" : "lg:h-20"
            }`}
            onClick={() => handleClick(index)}
            key={index}
          >
            {/* Title and Toggle Icon */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{item.title}</span>
              <span className="text-2xl font-bold">
                {showAccordion === index ? "-" : "+"}
              </span>
            </div>
            {/* Accordion Content */}
            {showAccordion === index && (
              <p className="mt-4 text-gray-700">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFAQ;
