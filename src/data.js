let productos = [
    {
        id: 1,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00010600/00010630.jpg?3.0.136g',
    },
    {
        id: 2,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00118300/00118371.jpg?3.0.136g',
    },
    {
        id: 3,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00498800/00498800.jpg?3.0.136g',
    },
    {
        id: 4,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00510600/00510627.jpg?3.0.136g',
    },
];

export function getProductos() {
    return productos;
  }

export function getProducto(id) {
    return productos.find(
        (producto) => producto.id === id
    );
}