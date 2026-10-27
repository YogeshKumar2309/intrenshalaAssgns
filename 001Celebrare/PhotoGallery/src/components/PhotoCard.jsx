

const PhotoCard = ({ photo ,isFavrate, handleToggleFav}) => {

    return (

        <div className="bg-[rgba(0,0,0,0.06)] rounded-2xl">
            <img
                className='rounded-t-xl'
                src={photo.download_url}
                alt={photo.author}
                height={photo.height}
                loading='lazy'
            />
            <div className='px-4 py-2 flex justify-between '>
                <p>{photo.author}</p>
                <button onClick={() => handleToggleFav(photo.id)}>
                    {isFavrate ? (
                        <span>♥️</span>
                    ) : (
                        <span>🖤</span>
                    )}
                </button>
               
                </div>
        </div>
    )
}

export default PhotoCard