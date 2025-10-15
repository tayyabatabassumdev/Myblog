import { useState, useEffect } from "react";
const useImagePreview = () => {
  const [imageBase64, setImageBase64] = useState("");
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    return () => setImageBase64("");
  }, []);
  return { imageBase64, handleImage, setImageBase64 };
};
export default useImagePreview;
