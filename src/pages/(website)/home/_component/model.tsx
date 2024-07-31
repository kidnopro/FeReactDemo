import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-center mb-4">
          <img
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/422315667_1493694971177911_4131703828557050912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZx5P2l9uJyx1rb29iyWmio82KOcIWNSKjzYo5whY1PKEtdF2cLnVq0yq46C3y1q8-QkePLeka683TCgf4j9H&_nc_ohc=jjrzQC6f_uoQ7kNvgE6ke8G&_nc_ht=scontent.fhan14-1.fna&oh=00_AYBuSVJ8Sbjy3G_rWrLOxiNRA9eGdU8a4HKmMjii0O_cRQ&oe=66B06AB1"
            alt="Modal Thumbnail"
            className="w-32  rounded-full border-2 border-gray-300"
          />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">
          ReactJs Thầy Nguyễn Hoàng
        </h2>
        <p className="mb-4 text-center">
          Hello Guốc !
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default Modal;
