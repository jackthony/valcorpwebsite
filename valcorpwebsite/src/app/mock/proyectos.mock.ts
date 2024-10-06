
export const proyectoList:proyecto[] = [
 
    {
        id: 1,
        name: 'Urb. Los Huertos de San Jose',
        titulo : 'Huertos',
        logoUrl : '../../public/assets/LOGO-BLANCO-HUERTOS.webp',
        promo : '../../public/assets/PROMO_HUERTOS.png' ,
        precio :'../../public/assets/INFO-PRECIOS-HUERTOS.png' ,
        bgUrlImg : '../../public/assets/imagen-robles.webp',
        color: '#EF8619',
        urlModelo:"../../public/assets/V1 copia.webp",
        urlModeloContacto:"../../public/assets/MODELO-HUERTOS-4.webp",
        urlModeloFacilidades:"../../public/assets/V8 copia.webp",
        estado: true,
        vidUrl: '../../public/assets/VIDEO-HUERTOS-SAN-JOSE.webm',
        pdfUrl:"../../public/assets/HUERTOS.pdf",
        tipo_grafia:"'Chiladepia', sans-serif",
        ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3313.514595221012!2d-78.55390472436648!3d-9.0221793779252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab87a64d4f6883%3A0x5c8a2e182d75f0d6!2sUrb.%20Villa%20los%20Robles!5e0!3m2!1ses!2spe!4v1720232626703!5m2!1ses!2spe'
     },
     {
       id: 2,
       name: 'Urb. Los Prados',
       titulo : 'Prados',
       estado: false,
       urlModelo:'',
       logoUrl : '../../public/assets/PRADOS-NUEVO.png',
       bgUrlImg : '../../public/assets/imagen-prados.webp',
       color: '#483374',
       vidUrl: '../../public/assets/VIDEO-HUERTOS-DE-SAN-JOSE.mp4',
       pdfUrl:"../../public/assets/ROBLES.pdf",
       ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7880.789893536809!2d-78.5591638!3d-9.0276892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8794ee83bffb%3A0x67f2f37a8c50bfb4!2sUrb.%20Los%20Huertos%20de%20San%20Jos%C3%A9!5e0!3m2!1ses!2spe!4v1720153911032!5m2!1ses!2spe'

   
    },
    {
       id: 3,
       name: 'Urb. Villa Los Robles',
       titulo : 'Robles',
       estado: true,
       urlModelo:"../../public/assets/MODELO-ROBLES-3.webp",
       logoUrl : '../../public/assets/LOGO-BLANGO-ROBLES.png',
       promo : '../../public/assets/PROMO_ROBLES.png' ,
       precio :'../../public/assets/INFO-PRECIOS-ROBLES.png',
       bgUrlImg : '../../public/assets/image.webp',
       urlModeloContacto:"../../public/assets/V1 copia.webp",
       urlModeloFacilidades:"../../public/assets/MODELO-ROBLES-2.webp",
       color: '#91BF24',
       tipo_grafia:"'Mortina', sans-serif",
       vidUrl: '../../public/assets/VIDEO-URB VILLA LOS ROBLES.webm',
       pdfUrl:"../../public/assets/ROBLES.pdf",
       ubicacionMaps : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7880.789893536809!2d-78.5591638!3d-9.0276892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8794ee83bffb%3A0x67f2f37a8c50bfb4!2sUrb.%20Los%20Huertos%20de%20San%20Jos%C3%A9!5e0!3m2!1ses!2spe!4v1720153911032!5m2!1ses!2spe'

    },
   
   ]
   
   
   export interface proyecto{
   
   id:number | string;
name?: string;
titulo?: string;
estado?:boolean,
urlModelo:string;
promo?: string;
urlModeloContacto?:string,
precio?: string;
bgUrlImg?: string;
logoUrl?: string,
color?: string,
vidUrl?: string,
ubicacionMaps?:string,
pdfUrl?:string
tipo_grafia?:string
urlModeloFacilidades?:string
   
   }