import { useEffect, useState } from 'react';

function ProductDescription() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener el producto');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4 text-gray-700 dark:text-white">Cargando producto...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-8 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <img className="w-64 mb-4" src={product.image} alt={product.title} />
      <p className="mb-2"><strong>Categoría:</strong> {product.category}</p>
      <p className="mb-2"><strong>Descripción:</strong> {product.description}</p>
      <p className="mb-2"><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductDescription;
