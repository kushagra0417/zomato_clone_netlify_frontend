import React, { useState,useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import { useSelector,useDispatch } from 'react-redux';

// components
import PhotosCollection from "../../components/Restaurant/PhotosCollection";

//Redux action
import { getImage } from "../../Redux/Reducer/Image/Image.action";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);


  

  const reduxState=useSelector(
    (globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant
  )
  
  const dispatch=useDispatch()
  
  
  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images=[]
        data.payload.image.images.map(({location})=>images.push(location))
        setPhotos(images);
       
      });
      
    }
  }, [reduxState,dispatch]);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <div className="my-8">
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
      {photos.map((photo) => (
        <PhotosCollection image={photo} openViewer={openViewer} />
      ))}
      </div>
    </div>
  );
};

export default Photos;
