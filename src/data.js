let ofertas = [
    {
        id: 1,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00502000/00502001.jpg?3.0.137c',
    },
    {
        id: 2,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00288300/00288309.jpg?3.0.137c',
    },
    {
        id: 3,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00507800/00507801.jpg?3.0.137c',
    },
    {
        id: 4,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00473300/00473348.jpg?3.0.137c',
    },
];
let almacen = [
    {
        id: 1,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00119900/00119984.jpg?3.0.137c',
    },
    {
        id: 2,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00267800/00267890.jpg?3.0.137c',
    },
    {
        id: 3,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00293500/00293543.jpg?3.0.137c',
    },
    {
        id: 4,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00520300/00520351.jpg?3.0.137c',
    },
];
let bebidas = [
    {
        id: 1,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00180400/00180415.jpg?3.0.137c',
    },
    {
        id: 2,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00522500/00522537.jpg?3.0.137c',
    },
    {
        id: 3,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00525100/00525182.jpg?3.0.137c',
    },
    {
        id: 4,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00503100/00503129.jpg?3.0.137c',
    },
];

export function getProductos(category) {
    switch (category) {
        case 1:
            return ofertas;
        case 2:
            return almacen;
        case 3:
            return bebidas;
    
        default:
            break;
    }
  }

export function getProducto(category,id) {
    switch (category) {
        case 1:
            return ofertas.find(
                (producto) => producto.id === id
            );
        case 2:
            return almacen.find(
                (producto) => producto.id === id
            );
        case 3:
            return bebidas.find(
                (producto) => producto.id === id
            );
    
        default:
            break;
    }    
}