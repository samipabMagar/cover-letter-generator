import React, { useRef } from "react";
import LetterFormAndPreview from "./components/LetterFormAndPreview";
import Footer from "./components/Footer";
import html2canvas from "html2canvas";


const App = () => {
  const coverLetter = useRef();
  const downloadCoverLetter=async (e) => {
    e.preventDefault();
    const canvas = await html2canvas(coverLetter.current);
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "cover-letter.png";
    link.click();
    
  }
  return (
    <div className="bg-[#c5deec] w-full h-min-screen pb-5">
      <h1 className="text-zinc-800 font-bold py-6 px-5 bg-gradient-to-r from-blue-400 via-purple-200 to-pink-300 text-2xl text-center">
        Generate Your Cover Letter
      </h1>
      <LetterFormAndPreview coverLetter={coverLetter} handleDownload={downloadCoverLetter}/>
        <hr  className="mt-4 text-amber-50"/>
       <Footer/>
    </div>
  );
};

export default App;
