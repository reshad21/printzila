import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Tusktwo = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const tShirtRef = useRef<HTMLDivElement>(null);

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
      // Clone the t-shirt element and add the background image inline
      const clone = tShirtRef.current.cloneNode(true) as HTMLElement;
      const backgroundImage = getComputedStyle(
        tShirtRef.current
      ).backgroundImage;
      clone.style.backgroundImage = backgroundImage;

      // Append clone to body temporarily
      document.body.appendChild(clone);

      // Use html2canvas to capture the clone
      const canvas = await html2canvas(clone);

      // Remove clone from body
      document.body.removeChild(clone);

      // Download the canvas as an image
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
          backgroundImage:
            "url(https://www.coolclub.gr/images/styles/large/CCB2810147_1.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Logo Component */}
        {logo && (
          <Draggable>
            <ResizableBox
              width={100}
              height={100}
              lockAspectRatio
              minConstraints={[50, 50]}
              maxConstraints={[200, 200]}
              className="border-2 border-dashed border-gray-400"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
                style={{ pointerEvents: "none" }}
              />
            </ResizableBox>
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
