import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  
  //fetching data
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    // console.log(data);

    if (data && data.products) {
      setProducts(data.products);
    }
  }

  //displaying all the changes
  useEffect(() => {
    fetchProducts();
  }, [])

  //handling event
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  return (
    <div>
      <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
            <span>
              {prod.title}
            </span>
          </span>
        })}
      </div>

      <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>
    </div>
  );
}

export default App;