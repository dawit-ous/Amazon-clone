import React, { useContext } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr"; // Location pin icon
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider"

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  console.log(basket);

  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo section */}
            <div className={classes.logo__container}>
              {/* this <a 'herf' href change 'link' ,'href' */}
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <GrLocation />
                </span>
                <div>
                  <p>Deliver href</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search section */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="Search Amazon" />
              <BsSearch size={25} />
            </div>
            {/* right side  section */}
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              {/* sign in  */}
              <Link to="/auth">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>
              {/* orders returns */}
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
