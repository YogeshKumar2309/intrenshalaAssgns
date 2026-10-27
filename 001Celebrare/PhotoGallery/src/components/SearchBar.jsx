import React, { useState } from 'react'

const SearchBar = ({ onChange }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(search);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='rounded px-2 py-2  flex items-center max-w-[30vw]'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     onChange(search);
        //   }
        // }}
        className="z-100 border border-r-0 rounded-s-md  p-2"
        placeholder='search by author ...' />
      <button
        type='submit'
        className='bg-amber-500 border bor rounded-r-md h-full p-2'
      >search</button>
    </form>
  )
}

export default SearchBar




