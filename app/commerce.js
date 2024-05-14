import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY, false, {
    axiosConfig: {
      headers: {
        'Chec-Version': '2021-09-29'
      },
    },
  });

  export default client; 
