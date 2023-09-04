// 1. Create a Context for managing the image URL.
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrls] = useState('');

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrls }}>
      {children}
    </ImageContext.Provider>
  );
};
