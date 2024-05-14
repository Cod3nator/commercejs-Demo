'use client'
import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';
import commerce from "../commerce"

const ProductPage = () => {
    const searchParams = useSearchParams()
    const [detail, setDetail] = useState();
    const search = searchParams.get('id')
  useEffect(() => {
      // setDetail(getDetail())
    console.log(search);
  }, []); 
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const retDetail = await getDetail(search);
        setDetail((prev) => ({
          ...prev,
          ...retDetail
        }));
      } catch (error) {
        console.error('Error fetching detail:', error);
      }
    };

    fetchDetail();
  }, [search]); 
  async function getDetail(search) {
    const data = await commerce.products.retrieve(search);
    return data; // Assuming data is already in JSON format
  }
  
  
  return (
    <> 
      
      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </>
  );
};

export default ProductPage;

