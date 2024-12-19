/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/storeSlice";
import ConfirmModal from "../Modal/ConfirmModal";
import { logOut } from "../../redux/auth/operation";

export function NavBar() {
  const [isExitModalOpen, setExitModalOpen] = useState(false);
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLogin)
  const isLoggedIn = true;

  const handleExitClick = () => {
    setExitModalOpen(true); // Otwieramy modal po kliknięciu "exit"
  };

  const closeExitModal = () => {
    setExitModalOpen(false); // Zamykamy modal
  };

  const confirmExit = () => {
    dispatch(logOut()); // Akcja wylogowania
    setExitModalOpen(false);
    console.log("User logged out");
  };

  return (
    <div>
      <span>Logo</span>
      <div>
        {isLoggedIn ? (
          <div>
            <span>avatar </span>
            <span>username </span>
            <button onClick={handleExitClick}>exit</button>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Modal do potwierdzenia wyjścia */}
      <ConfirmModal
        isOpen={isExitModalOpen}
        onClose={closeExitModal}
        onConfirm={confirmExit}
        message="Are you sure you want to leave?"
      />
    </div>
  );
}
