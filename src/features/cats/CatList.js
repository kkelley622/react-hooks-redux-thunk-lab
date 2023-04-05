// write your CatList component here
import React from 'react'

const CatList = ({ catPics= [] }) => {
    const catList = catPics.map((catPic) => <img key={catPic.id} src={catPic.url} alt="cat" />)
  return (
    <div>{catList}</div>
  )
}

export default CatList