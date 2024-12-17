/** @format */

import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/storeSlice";

export function NavBar() {
  // const isLoggedIn = useSelector(selectIsLogin)
  const isLoggedIn = true;
  return (
    <div>
      <span>Logo</span>
      <div>
        {isLoggedIn ? (
          <div>
            <span>avatar </span>
            <span>username </span>
            <button>exit</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
