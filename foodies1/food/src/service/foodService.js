import axios from "axios";


export const fetchFoodList = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/food');
    return response.data;
  } catch (error) {
    console.error("Error fetching food list:", error);
    throw error;
  }
};


  export const fetchFoodDetails = async (id) => {
    try{
    const response = await axios.get("http://localhost:8080/api/food/" + id);
    return response.data;
    } catch(error){
      console.log('Error fetching food details', error);
      throw error;
    }
    
  };

