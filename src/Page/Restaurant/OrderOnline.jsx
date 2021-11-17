import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi"


//components
import FloatMenuBtn from '../../components/Restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer';
import FoodList from '../../components/Restaurant/Order-Online/FoodList';




// redux action
import {  getFoodList } from '../../Redux/Reducer/Food/Food.action';



const OrderOnline = () => {
  const [menu, setMenu] = useState([]);
  const [selected,setSelected]=useState("Recommended");
  const onClickHandler=(e)=>{
     
    if(e.target.id){
        setSelected(e.target.id);
    }
    return;

}

  const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant );
  const dispatch = useDispatch();
  

useEffect(()=>{
     reduxState&&dispatch(getFoodList(reduxState.menu)).then((data)=>setMenu(data.payload.menus.menus))  
    },[dispatch,reduxState])


    return (
      <>
        <div className="w-full flex h-screen ">
          <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200  w-1/4 h-screen overflow-y-auto">
            {
              menu.map((item)=>(
                <MenuListContainer {...item} key={item._id} onClickHandler={onClickHandler} selected={selected}/>
              ))
            }
          </aside>
          <div className="w-full md:w-3/4 md:ml-6 ">
            <div className="md:pl-3  ">
              <h2 className="text-3xl font-semibold">Order Online</h2>
              <h4 className="flex items-center gap-2 font-light text-gray-500">
                <AiOutlineCompass /> Live track your order | <BiTimeFive /> 65
                min
              </h4>
            </div>
            <section className="flex flex-col gap-3 md:gap-5 my-4 md:h-screen md:overflow-y-auto md:pr-6 xl:pr-0 ">
              
              
                {menu.map((item)=>(
                  <FoodList key={item._id} {...item}/>
                ))}

                     

              
            </section>
          </div>
        </div>
        <FloatMenuBtn menu={menu}  onClickHandler={onClickHandler} selected={selected}/>
      </>
    );
}

export default OrderOnline
