
export const proyectoList:proyecto[] = [
 
    {
        id: 1,
        name: 'Los Huertos de San Jose',
        titulo : 'Huertos',
        logoUrl : '../../public/assets/LOGO-BLANGO-HUERTOS.png',
        promo : '../../public/assets/PROMO_HUERTOS.png' ,
        separarPrecio : 12,
        precio :'../../public/assets/INFO-PRECIOS-HUERTOS.png' ,
        bgUrlImg : '../../public/assets/imagen-robles.webp',
        description : 'Gasolina refina en los centros de combustibles mas eficientes.',
        color: '#EF8619',
        vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',
     },
     {
       id: 2,
       name: 'Los Prados',
       titulo : 'Prados',
       logoUrl : '../../public/assets/PRADOS-NUEVO.png',
       promo : '../../public/assets/PROMO_ROBLES.png' ,
       separarPrecio : 12,
       precio :'../../public/assets/INFO-PRECIOS-ROBLES.png',
       bgUrlImg : '../../public/assets/imagen-prados.webp',
       description : 'Gasolina refina en los centros de combustibles mas eficientes.',
       color: '#483374',
       vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',
   
    },
    {
       id: 3,
       name: 'Urb. Villa Los Robles',
       titulo : 'Robles',
       logoUrl : '../../public/assets/LOGO-BLANGO-ROBLES.png',
       promo : '../../public/assets/PROMO_ROBLES.png' ,
       separarPrecio : 12,
       precio :'../../public/assets/INFO-PRECIOS-ROBLES.png',
       bgUrlImg : '../../public/assets/image.webp',
       description : 'Gasolina refina en los centros de combustibles mas eficientes.',
       color: '#91BF24',
       vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',

    },
   
   ]
   
   
   export interface proyecto{
   
   id:number | string;
name?: string;
titulo?: string;
promo?: string;
separarPrecio?: number;
precio?: string;
description?: string;
bgUrlImg?: string;
logoUrl?: string,
color?: string,
vidUrl?: string,

   
   }