import React ,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//components
import MenuCollection from '../../components/Restaurant/MenuCollection'


//Redux action
import { getImage } from "../../Redux/Reducer/Image/Image.action";

const Menu = () => {

// const [menus, setMenus] = useState([
//   {
//     menuTitle: "Menu",
//     image: [
//       "https://b.zmtcdn.com/data/menus/043/3900043/4805d8ca03a16504635f00aebb3a1cbb.jpg",
//       "https://b.zmtcdn.com/data/menus/043/3900043/917aba3ea57b3ad4d7f60e5162a1ae64.jpg",
//     ],
//   },
// ]);

const [menus, setMenus] = useState([])

const reduxState=useSelector(
  (globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant
)

const dispatch=useDispatch()


useEffect(() => {
  if (reduxState) {
    dispatch(getImage(reduxState?.menuImages)).then((data) => {
      const images=[]
      data.payload.image.images.map(({location})=>images.push(location))
      setMenus(images);
     
    });
    
  }
}, [reduxState,dispatch]);


    return (
        <>
            <div className="flex flex-wrap gap-3 my-8">
                
                    <MenuCollection menuTitle="Menu"
                    image={menus}/>
                
            </div>
        </>
    )
}

export default Menu
