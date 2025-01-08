import html2canvas from "html2canvas";
import { Resizable } from "re-resizable";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";

const Tusktwo = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const tShirtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload the background image and convert it to a data URL
    const preloadImage = async () => {
      const response = await fetch(
        "https://www.coolclub.gr/images/styles/large/CCB2810147_1.jpg"
      );
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => setBackgroundImage(reader.result as string);
      reader.readAsDataURL(blob);
    };

    preloadImage();
  }, []);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const exportFinalImage = async () => {
    if (tShirtRef.current) {
      const canvas = await html2canvas(tShirtRef.current, {
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = "final-tshirt-design.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">T-Shirt Designer</h1>

      {/* Upload Logo */}
      <input type="file" accept="image/*" onChange={handleLogoUpload} />

      {/* T-Shirt Container */}
      <div
        ref={tShirtRef}
        className="relative w-[300px] h-[400px] bg-gray-200 border border-gray-300 shadow-lg"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Draggable and Resizable Logo */}
        {logo && (
          <Draggable>
            <Resizable
              defaultSize={{
                width: 100,
                height: 100,
              }}
              minWidth={50}
              minHeight={50}
              maxWidth={200}
              maxHeight={200}
              //   className="border-2 border-dashed border-gray-400"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
                style={{ pointerEvents: "none" }} // Prevents drag/resize interference
              />
            </Resizable>
          </Draggable>
        )}
      </div>

      {/* Export Button */}
      <button
        onClick={exportFinalImage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Final Image
      </button>
    </div>
  );
};

export default Tusktwo;
