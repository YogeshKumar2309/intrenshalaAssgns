import { useEffect, useState } from "react";



const  useFectchPhotos = (limit = 30) => {
   const [error , setError] = useState('');
   const [photos, setPhotos] = useState([]);
   const [loading , setLoading] = useState(true);

    
     const fetchPhotos = async () => {
      const url = `https://picsum.photos/v2/list?limit=${limit}/400/300`

      try {
        const res = await fetch(url);
        const data = await res.json();
        if(!res.ok) throw new Error(res)
        setPhotos(data);

        console.log(data);    
      } catch (error) {
         setError(error.message || "Failed to fetch");
         console.log("fetching error",error.message);
      } finally {
          setLoading(false);
      }                

    }

    useEffect(() => {
       fetchPhotos()
    },[limit])

  return [error,photos,loading];
}
   

export default useFectchPhotos