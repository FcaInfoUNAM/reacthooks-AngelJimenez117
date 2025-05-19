[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19574630)
# Laboratorio Rutas en react

Este laboratorio tiene el objetivo demostrar como se iconsume un api y se almacenan los valores en variables mediante Hooks
## Requisitos Previos

1. Vite
2. Crear una cuenta en [GitHub](https://github.com/).
3. Utilizar un codespace de git hub o un dev container con docker en tu computadora de forma local

---

## Instrucciones Paso a Paso

### 1. Cargando el proyecto

1.1  Instalar los paquetes del proyecto

``` bash
npm install
```

1.2 Ejecuta react en modo de desarrollo

```
npm run dev -- --host
```

> [!IMPORTANT]
> Se desplegará un pop up en la parte inferior derecha con el mensaje: La aplicación que se ejecuta en el puerto 5173 está disponible. 
> [Ver todos los puertos reenviados] (command:~remote.forwardedPorts.focus) [Abrir en el navegador] [Hacer público] Debes dar click en hacer público

> [!NOTE]
>Si no lograste darle click o no te apareció el pop up en la cinta de terminal, ve a la opción puertos, busca el puerto 5173, da click derecho, selecciona visibilidad de puerto y selecciona público

Abre el proyecto en el navegador web

### 2. Revisar componentes

2.1 Revisa el enrutado y nota que la ruta "/" apunta a NotFound ```src/App.jsx```
> [!NOTE]
>Mas adelante vamos a cambiarlo a un nuevo componente

2.2 ACrea un nuevo archivo llamado ```src/ProductGrid.jsx```

```jsx
import {useEffect} from "react";
function ProductGrid(){
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data=>console.log(data))
    });
    return(
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
        
        </div>
    );
}
export default ProductGrid;

```
2.3 Agrega el componente en ```src/App.jsx``` y asignalo a la ruta "/"

```jsx
// ...
import ProductGrid from './ProductGrid';
// ...
        <Route path="/" element={<ProductGrid/>}
// ...
```

2.4 Revisa la consola del navegador y verás el resultado del api.

### 3. Guardar los valores con useState

3.1 Abre el archivo ```ProductGrid.jsx``` y agrega una variable productos mediante use state y asignale el resultado del llamado al api
```jsx
//...Importa UseState
import {useState, useEffect} from "react";
  //...Crea la sonstante y el constructor
  const [products, setProducts] = useState([]);
    //...Usa el constructor para asignar a use state los productos
    .then(data=>setProducts(data))
    //... haz un map a la variable d eproductos para generer Cards
    return(
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
        {products.map(e=><Card key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price}/>)}
        </div>
    );
  //..
```
> [!NOTE]
>No olvides importar el componente Card

3.2 Prueba la ruta "/" y debrás ver un grid de productos con imagenes
> [!NOTE]
> Puedes revisar el componenre Card para ver la estructura que se utilizó como ejemplo para tu proyecto

### 4. Reto

Crea un componente Llamado ProductDescription que muestre el contenido de un producto con el id 1 utilizando useEffect y fetch con la siguiente url [https://fakestoreapi.com/products/1] 

### 5. Guarda los cambios y subelos al repositorio

Guarda los cambios en el historial del repositorio con un commit:

```bash
cd ..
git add my-app
git commit -m "propiedades de los componentes"
git push origin main
```
 > [!TIP]
 > Documentación instalación tailwind: https://tailwindcss.com/docs/installation/using-vite

 > [!TIP]
 > Documentación ejemplos tailwind react: https://tailwindcss.com/plus/ui-blocks/preview

  > [!TIP]
 > Api de ejemplo utilizada: https://fakestoreapi.com
