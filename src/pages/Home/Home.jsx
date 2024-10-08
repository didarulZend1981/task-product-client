


import { useEffect,useState } from "react";
import axios from 'axios';
import { Helmet } from "react-helmet-async";




const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('creationDate');
  const [sortOrder, setSortOrder] = useState('desc');



    



  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });
  
  const query = new URLSearchParams(filters).toString();
  
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters(''); // Reset the select option
    setFilters(''); // Reset the select option
    setFilters(''); // Reset the select option
  };



  const limit = 9; // Items per page



 useEffect(() => {
        const fetchProducts = async () => {
            try {
                

                //hosting
                const response = await axios.get(`https://task-product-server.vercel.app/api/products?page=${page}&limit=${limit}&search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`);

                // //local
                // const response = await axios.get(`http://localhost:5000/api/products?page=${page}&limit=${limit}&search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`);

                
                // const data = await response.json();
                const data = response.data;
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, [page,search,sortField, sortOrder]);

  
  


    useEffect(() => {
        const filterProduct = async () => {
            try {

                 
                // hosting
                const response = await axios.get(`https://task-product-server.vercel.app/api/products/fil?${query}`);

                // //local
                // const response = await axios.get(`http://localhost:5000/api/products/fil?${query}`);

              
                const data = response.data;
                setProducts(data.products);
                setTotalPages(data.total);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        filterProduct();
    }, [filters]);



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
    <>
    
      <Helmet>
        <title className="uppercase">TASK-BD | Home</title>
        
      </Helmet>



    <div className="container mx-auto p-4">
       
            
             
        <div>
            <h2 className="text-center uppercase mt-8 mb-2">Product Filter</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
            
            <div className="form-control w-full max-w-xs">
            
                <select
                    className="select select-bordered"
                    value={filters.category}
                    onChange={handleInputChange}
                    name="category"
                >
      
                    <option value="">Choose a category</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Shorts">Shorts</option>
                </select>
            </div>

            
            <div className="form-control w-full max-w-xs">
           
            <select
                className="select select-bordered"
                value={filters.brand}
                onChange={handleInputChange}
                name="brand"
            >
      
                <option value="">Choose a brand</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
                <option value="Under Armour">Under Armour</option>
                <option value="Levi's">Levi's</option>Harley Davidson
                <option value="Wrangler">Wrangler</option>
                <option value="Harley Davidson">Harley Davidson</option>
                <option value="Columbia">Columbia</option>
                <option value="Canada Goose">Canada Goose</option>Zara  Hugo Boss H&M Reformation
                <option value="Zara">Zara</option>
                <option value="Hugo">Hugo</option>Harley Davidson
                <option value="Boss">Boss</option>
                <option value="H&M">H&M</option>
                <option value="Reformation">Reformation</option>
            </select>
      </div>

        
            <input type="number" name="minPrice" value={filters.minPrice} onChange={handleInputChange} className="input input-bordered  mb-4" placeholder="minPrice..."/>

        
            
            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleInputChange} className="input input-bordered mb-4" placeholder="maxPrice..." />


                
            
            </div>

          
        </div>
        






        <h2 className="text-center uppercase mb-2">Product Name Search</h2>
            <div className="flex  justify-center">
                
               
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="input input-bordered  mb-4 text-center w-48"
               
            />
            </div>
            
            <h2 className="text-center mb-2 uppercase">Sort</h2>
            <div>
               
             <div className="flex  mb-4 w-full justify-center">
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
            </div>
            
            
            <h1 className="text-2xl font-bold mb-4 text-center uppercase">Products</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

               
                {products?.length>0 && products.map(product => (
                    
                    <li key={product._id} className="card bg-base-100 shadow-md">
                        <figure>
                            <img src={product.ProductImage} alt={product.productName} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-base font-medium "><span className="uppercase text-[#23BE0A]">Name</span>:<span>{product.ProductName}</span></h2>
                            <p text-base><span className="text-[#23BE0A]">Description</span> : {product.Description}</p>
                            <div className="flex">
                            <p className="text-lg font-semibold w-[150px] border-x-0"><span className="text-[#23BE0A]">Price</span> : ${product.price}</p>
                            <p className="w-[150px]"><span className="text-[#23BE0A]">Ratings</span>: {product.Ratings}</p>
                            </div>

                            <div className="flex">
                                <p className="w-[120px]"><span className="text-[#23BE0A]">Category</span>: {product.category}</p>
                                <p className="w-[120px]"><span className="text-[#23BE0A]">Brand</span>: {product.brand}</p>
                            </div>
                            
                            
                            <p className="text-sm text-gray-500 text-center font-bold"><span className="text-[#23BE0A]">Created</span>: {new Date(product.creationDate).toLocaleString()}</p>
                        </div>
                    </li>
                ))}
            </ul>
          
            

            <div className="flex justify-center mt-4 space-x-1 font-semibold">
            <button className="btn uppercase" onClick={handlePreviousPage} disabled={page === 1}>
                    « Previous
                </button>   
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={`btn ${index + 1 === page ? 'btn-[primary]' : 'btn-outline'}`}
                    >
                        {index + 1}
                    </button>
                ))}


<button className="btn uppercase " onClick={handleNextPage} disabled={page === totalPages}>
                    Next »
                </button>
            </div>
            

           
        </div>
        </>
  );
};

export default Home;