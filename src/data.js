let categories = [
    {
        id: 1,
        nombre: 'Ofertas',
    },
    {
        id: 2,
        nombre: 'Almacen',
    },
    {
        id: 3,
        nombre: 'Bebidas',
    },
];
let products = [
    {
        id: 1,
        idCategory: 1,        
        name: 'Pápel Higiénico Campanita packX4',
        price: 50,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00502000/00502001.jpg?3.0.137c',
    },
    {
        id: 2,
        idCategory: 1,
        name: 'Agua Mineral Kin sin gas 6 litros',
        price: 80,        
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00288300/00288309.jpg?3.0.137c',
    },
    {
        id: 3,
        idCategory: 1,
        name: 'Suavizante para lavar ropa Ecovita 900ml',
        price: 600,        
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00507800/00507801.jpg?3.0.137c',
    },
    {
        id: 4,
        idCategory: 1,
        name: 'Casablanca Pintura Látex Interior Ultramaster 20 Lts.',
        price: 1000,        
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00473300/00473348.jpg?3.0.137c',
    },
    {
        id: 5,
        idCategory: 2,
        name: 'Hileret Light 250 Gramos',
        price: 250,
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00119900/00119984.jpg?3.0.137c',
    },
    {
        id: 6,
        idCategory: 2,  
        name: 'Mostaza con Miel La Parmesana 300g',
        price: 200,              
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00267800/00267890.jpg?3.0.137c',
    },
    {
        id: 7,
        idCategory: 2,   
        name: 'Café Bonafide Sensaciones Sabor Intenso 250g',
        price: 500,             
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00293500/00293543.jpg?3.0.137c',
    },
    {
        id: 8,
        idCategory: 2,   
        name: 'Frasco Mermelada de Ciruela Arcor 70g',
        price: 300,             
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00520300/00520351.jpg?3.0.137c',
    },  
    {
        id: 9,
        idCategory: 3,      
        name: 'Gaseosa Cunnington Cola 2,25 Lts.',
        price: 400,                  
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00180400/00180415.jpg?3.0.137c',
    },
    {
        id: 10,
        idCategory: 3,    
        name: 'Jugo de Naranja Citrix 100% pulpa de fruta 1 Lt.',
        price: 350,                            
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00522500/00522537.jpg?3.0.137c',
    },
    {
        id: 11,
        idCategory: 3,
        name: 'Cerveza Andes Ipa Roja Lata PackX6',
        price: 1200,                                
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00525100/00525182.jpg?3.0.137c',
    },
    {
        id: 12,
        idCategory: 3,   
        name: 'Vino Maoutier Tinto X 1125ml',
        price: 780,                             
        imageURL: 'https://static.cotodigital3.com.ar/sitios/fotos/medium/00503100/00503129.jpg?3.0.137c',
    },      
];

export function getCategories() {
    return categories;
}

export function getProductos(category) {
    return products.filter(
        (prductlist) => prductlist.idCategory === category
    )
  }

export function getProducto(id) {
    return products.find(
        (prducto) => prducto.id === id
    )
}