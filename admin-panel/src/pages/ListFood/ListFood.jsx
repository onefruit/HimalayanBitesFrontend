import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './ListFood.css';
import { deleteFood, getFoodList } from '../../services/FoodService';

const ListFood = () => {

  const [list, setList] = useState([]);

  const fetchList = async ()=>{
    try{
     const data = await getFoodList();
     setList(data);
    }catch(error){
      toast.error('Error while reading the foods.')
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  const removeFood = async (foodId)=>{
   try{
      const success = await deleteFood(foodId);
      if(success){
        toast.success('Food removed')
        await fetchList();
      }
   }catch(error){
    toast.error('Error occured while removing the food')
   }
  }

  return (
   <div className="py-5 row justify-content-center">
    <div className="col-11 card">
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>

        <tbody>
          {
          list.map((item, index) =>{
           return(
            <tr key={index}>
              <td>
                <img src={item.imageUrl} alt='' height={48} width={48}></img>
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.category}
              </td>
              <td>
                Rs. {item.price}.00
              </td>
              <td className='text-danger text-center'>
                <i className='bi bi-x-circle' onClick={()=>
                  removeFood(item.id)
                }></i>
              </td>
            </tr>
           )
          })
          }

        </tbody>
      </table>
    </div>
   </div>
  )
}

export default ListFood;