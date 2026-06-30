export interface Apartamento {
  nombre: string;
  ubicacion: string;
  precioNoche: number;
  huespedes: number;
  habitaciones: number;
  banos: number;
  metros: number;
  descripcion: string;
  servicios: string[];
  imagenes: string[];
  disponible: boolean;
  coordenadas: { lat: number; lng: number };
}



export const apartamentos: Apartamento[] = [
    {
    nombre: "Loft Centro",
    ubicacion: "Ciutat Vella",
    precioNoche: 75,
    huespedes: 2,
    habitaciones: 1,
    banos: 1,
    metros: 48,
    descripcion:
      "Loft luminoso en pleno casco histórico, a un paso de los principales monumentos, restaurantes y vida local. Ideal para parejas que buscan ubicación inmejorable.",
    servicios: ["Wifi", "Cocina equipada", "Aire acondicionado", "Ropa de cama"],
    imagenes: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
    ],
    disponible: true,
    coordenadas: { lat: 39.4745, lng: -0.3760 },
  },
  {
    nombre: "Ático Mirador",
    ubicacion: "Ruzafa",
    precioNoche: 110,
    huespedes: 4,
    habitaciones: 2,
    banos: 2,
    metros: 72,
    descripcion:
      "Espectacular ático con terraza y vistas panorámicas a la ciudad. Espacios amplios y mucha luz natural, perfecto para familias o grupos.",
    servicios: ["Wifi", "Terraza", "Cocina equipada", "Parking", "Aire acondicionado"],
    imagenes: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    ],
    disponible: true,
    coordenadas: { lat: 39.4612, lng: -0.3735 },
  },
  {
    nombre: "Estudio Jardín",
    ubicacion: "Malvarrosa",
    precioNoche: 60,
    huespedes: 2,
    habitaciones: 1,
    banos: 1,
    metros: 38,
    descripcion:
      "Acogedor estudio con acceso a jardín privado en una zona tranquila y residencial. Perfecto para una escapada relajada.",
    servicios: ["Wifi", "Jardín", "Cocina equipada", "Ropa de cama"],
    imagenes: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    ],
    disponible: false,
    coordenadas: { lat: 39.4710, lng: -0.3270 },
  },
  {
    nombre: "Dúplex Familiar",
    ubicacion: "Malvarrosa",
    precioNoche: 145,
    huespedes: 6,
    habitaciones: 3,
    banos: 2,
    metros: 95,
    descripcion:
      "Amplio dúplex junto al parque, ideal para familias numerosas o grupos. Tres dormitorios, salón espacioso y zona de juegos cercana.",
    servicios: ["Wifi", "Parking", "Cocina equipada", "Aire acondicionado", "Lavadora"],
    imagenes: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
    ],
    disponible: true,
    coordenadas: { lat: 39.4740, lng: -0.3245 },
  },
];