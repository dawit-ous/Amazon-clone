import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import Loader from '../../Loader/Loader'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import ProductCard from '../../Product/ProductCard'
import { productUrl } from '../../../Api/endPoints'
function Results() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams()
  
  useEffect(() => {
    setIsLoading(true);

    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
    // console.log(categoryName)
  },[])
  console.log(results);
  
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/categoryName</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results
