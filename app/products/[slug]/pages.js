
import commerce from "../../commerce"
// import { useEffect, useState } from "react";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProductPage ({params}) {
  // const router = useRouter();
  // const { params } = router.query; 
  commerce.products.retrieve(params).then((product) => console.log(product.name));
  useEffect(() => {
    if (params) {
      console.log(params);
    }
  }, [params]); 

  return (
    <> 
      hello
    </>
  );
};

