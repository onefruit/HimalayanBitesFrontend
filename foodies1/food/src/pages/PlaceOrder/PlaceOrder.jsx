import { useContext } from "react";
import { assets } from "../../assets/assets";
import {StoreContext} from "../../context/StoreContext"
import { calculateCartTotals } from "../../util/cartUtil";

const PlaceOrder = () => {

  const { foodList, quantities, setQuantities } = useContext(StoreContext);

  const cartItems = foodList.filter((food) => quantities[food.id] > 0);

   const{subtotal, shipping, tax, total}=  calculateCartTotals(cartItems, quantities);

  return (
    <div className="container mt-2">
      <main>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={assets.logo}
            alt=""
            width="92"
            height="72"
          />
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Order Summary</span>
              <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {

                cartItems.map((e)=>(

                  <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{e.name}</h6>
                  <small className="text-body-secondary">
                  Qty:{quantities[e.id]}
                  </small>
                </div>
                <span className="text-body-secondary">${e.price * quantities[e.id]}</span>
              </li>
                ))
              }
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Shipping charge</h6>
                  
                </div>
                <span className="text-body-secondary">${subtotal === 0 ?0.0 :shipping.toFixed(2)}</span>

              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Tax</h6>
                 
                </div>
                <span className="text-body-secondary">${tax.toFixed(2)}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span> <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">

                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Prabin"
                    value=""
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Shah"
                    value=""
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />

                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="9803712345"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option>Nepal</option>
                  </select>
                  
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option>Bagmati</option>
                    <option>Madhesh</option>
                    <option>Karnali</option>
                    <option>Koshi</option>

                  </select>
                 
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="zip"
                    placeholder="12345"
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit" disabled={cartItems.length === 0}>
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
      <br />
    </div>  
  );
};

export default PlaceOrder;
