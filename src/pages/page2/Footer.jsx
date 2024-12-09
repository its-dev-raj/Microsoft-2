import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="md:flex  w-full h-full bg-[#ece8e8]">
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16 ">
          <h1>What's new</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Surface Pro",
              "Surface Laptop",
              "Microsoft Copilot",
              "Microsoft 365",
              "Explore Microsoft products",
              "Windows 11 apps",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Microsoft Store</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Account profile",
              "Download Center",
              "Microsoft Store Support",
              "Returns",
              "Order tracking",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Education</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Microsoft in education",
              "Devices for education",
              "Microsoft Teams for Education",
              "Microsoft 365 Education",
              "Office Education",
              "Educator training and development",
              "Deals for students and parents",
              "Azure for students",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Business</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Microsoft Cloud",
              "Microsoft Security",
              "Azure",
              "Dynamics 365",
              "Microsoft 365",
              "Microsoft Advertising",
              "Microsoft 365 Copilot",
              "Microsoft Teams",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Developer & IT</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Developer Center",
              "Documentation",
              "Microsoft Learn",
              "Microsoft Tech Community",
              "Azure Marketplace",
              "AppSource",
              "Microsoft Power Platform",
              "Visual Studio",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16 ">
          <h1>Company</h1>
          <div className="flex flex-col gap-4  font-light text-sm h-fit w-full">
            {[
              "Careers",
              "About Microsoft",
              "Company news",
              "Privacy at Microsoft",
              "Investors",
              "Security",
              "Sustainability",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer