'use client'

import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';

const Carrossel = () => {
  const imagens = [
    'https://taylorswiftbr.com/albums/Photoshoots/2023/Speak%20Now%20Taylors%20Version/TSBR_1.png',
    'https://taylorswiftbr.com/albums/Photoshoots/2023/Speak%20Now%20Taylors%20Version/TSBR_2.png'
  ];

  const [imagemID, setimagemID] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimagemID((num) =>
        num === imagens.length - 1 ? 0 : num + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [imagens.length]);

  return (
    <Carousel className='verdade' selectedItem={imagemID}>
      {imagens.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Imagem ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrossel;