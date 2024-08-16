


import { useEffect } from "react";
import { useState } from "react";




const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('creationDate');
  const [sortOrder, setSortOrder] = useState('desc');



  const limit = 9; // Items per page



 useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://task-product-server.vercel.app/api/products?page=${page}&limit=${limit}&search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`);
                const data = await response.json();
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, [page,search,sortField, sortOrder]);

  
 

    const handleNextPage = () => {
      if (page < totalPages) {
          setPage(page + 1);
      }
  };

  const handlePreviousPage = () => {
      if (page > 1) {
          setPage(page - 1);
      }
  };


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when search query changes
  };

  const handleSortChange = (field, order) => {
      setSortField(field);
      setSortOrder(order);
      setPage(1); // Reset to first page when sort option changes
  };

  return (
    <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
             





            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="input input-bordered w-full mb-4"
            />
             <div className="flex justify-end mb-4">
                <button
                    className="btn btn-outline mr-2"
                    onClick={() => handleSortChange('price', 'asc')}
                >
                    Price: Low to High
                </button>
                <button
                    className="btn btn-outline mr-2"
                    onClick={() => handleSortChange('price', 'desc')}
                >
                    Price: High to Low
                </button>
                <button
                    className="btn btn-outline"
                    onClick={() => handleSortChange('creationDate', 'desc')}
                >
                    Date Added: Newest First
                </button>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
               
                {products.map(product => (
                    <li key={product._id} className="card bg-base-100 shadow-md">
                        <figure>
                            <img src={product.ProductImage} alt={product.productName} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.ProductName}</h2>
                            <p>{product.Description}</p>
                            <p className="text-lg font-semibold">Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>Ratings: {product.Ratings}</p>
                            <p className="text-sm text-gray-500">Created: {new Date(product.creationDate).toLocaleString()}</p>
                        </div>
                    </li>
                ))}
            </ul>
          
            

            <div className="flex justify-center mt-4 space-x-1">
            <button className="btn" onClick={handlePreviousPage} disabled={page === 1}>
                    « Previous
                </button>   
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={`btn ${index + 1 === page ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {index + 1}
                    </button>
                ))}


<button className="btn" onClick={handleNextPage} disabled={page === totalPages}>
                    Next »
                </button>
            </div>
            

           
        </div>
  );
};

export default Home;

