import React, { useReducer, useState } from 'react'
import PhotoCard from '../components/PhotoCard'
import SearchBar from '../components/SearchBar'
import useFectchPhotos from '../hooks/useFectchPhotos'
import { favouritesReducer, initialState } from '../reducers/favouritesReducer'



const Gallery = () => {
  const [error, photos, loading] = useFectchPhotos(30);
  const [searchValue, setSearchValue] = useState('');
   
   const [state, dispatch ] = useReducer(favouritesReducer,initialState);

   const handleToggleFav = (id) => {
    console.log("toggle-id", id)
    dispatch({
      type: "TOGGLE_FAVOURITE", 
      payload: id,
    })
   }

   


  //filter logic here
  const filteredPhoto = photos.filter((photo) =>
    photo.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );



  if (loading) {
    return <div className='flex  justify-center items-center h-[50vh] bg-gray-50'>Loading...</div>
  }

  if (error) {
    return <div className='flex  justify-center items-center h-[50vh] bg-gray-50'>{
      error}</div>
  }

  return (
    <div className=' bg-[rgba(0,0,0,0.08)]'>
      <div className="flex justify-between ms-4 items-center h-20">
        <div className='font-bold text-2xl'>
          {/* <span className='text-amber-600'>Photo</span>
          <span className="">Gallery</span> */}
          
                <span className='text-amber-600'>C</span>
          <span className="">elebrare</span>
        </div>

        <SearchBar
          onChange={setSearchValue}
        />
        <span></span>

      </div>

      {/* PhotoCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-2 bg-[rgba(0,0,0,0.08)]">
        {filteredPhoto.length > 0 ? (
          filteredPhoto.map(photo => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavrate={state.favourites.includes(photo.id)}
              handleToggleFav={handleToggleFav}
            />
          ))
        ) : (
          <div className='col-span-full flex justify-center items-center h-[50vh] bg-gray-100'>No Photo Found</div>
        )
        }
      </div>
    </div>
  )
}

export default Gallery