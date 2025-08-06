import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { addFood } from "../../services/FoodService";
import { toast } from "react-toastify";

const AddFood = () => {
  
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biryani",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      // alert("Please select an image ");
      toast.error("Please select an image");
      return;
    }

    try{
      await addFood(data, image);
      toast.success('Food added successfully! ');
      setData({name: '', description: '', category: 'Biryani', price: ''})
      setImage(null);
    }catch(error){  
      toast.error('Error adding food.')
    }
  }

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt=""
                    width={98}
                  ></img>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  name="name"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Chicken Biryani"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                  placeholder="Write content here...."
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}

                >
                  <option value="Biryani">Biryani</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Ice Creams">Ice Creams</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  onChange={onChangeHandler}
                  value={data.price}
                  placeholder="Rs. 200"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
