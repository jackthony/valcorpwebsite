
export const proyectoList:proyecto[] = [
 
    {
        id: 1,
        name: 'Urb. Los Huertos de San Jose',
        titulo : 'Huertos',
        logoUrl : '../../public/assets/LOGO-BLANGO-HUERTOS.png',
        promo : '../../public/assets/PROMO_HUERTOS.png' ,
        separarPrecio : 12,
        precio :'../../public/assets/INFO-PRECIOS-HUERTOS.png' ,
        bgUrlImg : '../../public/assets/imagen-robles.webp',
        description : 'Gasolina refina en los centros de combustibles mas eficientes.',
        color: '#EF8619',
        vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',
        ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3313.514595221012!2d-78.55390472436648!3d-9.0221793779252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab87a64d4f6883%3A0x5c8a2e182d75f0d6!2sUrb.%20Villa%20los%20Robles!5e0!3m2!1ses!2spe!4v1720232626703!5m2!1ses!2spe'
     },
     {
       id: 2,
       name: 'Urb. Los Prados',
       titulo : 'Prados',
       logoUrl : '../../public/assets/PRADOS-NUEVO.png',
       promo : '../../public/assets/PROMO_ROBLES.png' ,
       separarPrecio : 12,
       precio :'../../public/assets/INFO-PRECIOS-ROBLES.png',
       bgUrlImg : '../../public/assets/imagen-prados.webp',
       description : 'Gasolina refina en los centros de combustibles mas eficientes.',
       color: '#483374',
       vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',
       ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7880.789893536809!2d-78.5591638!3d-9.0276892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8794ee83bffb%3A0x67f2f37a8c50bfb4!2sUrb.%20Los%20Huertos%20de%20San%20Jos%C3%A9!5e0!3m2!1ses!2spe!4v1720153911032!5m2!1ses!2spe'

   
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
       ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7880.789893536809!2d-78.5591638!3d-9.0276892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8794ee83bffb%3A0x67f2f37a8c50bfb4!2sUrb.%20Los%20Huertos%20de%20San%20Jos%C3%A9!5e0!3m2!1ses!2spe!4v1720153911032!5m2!1ses!2spe'

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
ubicacionMaps?:string

   
   }