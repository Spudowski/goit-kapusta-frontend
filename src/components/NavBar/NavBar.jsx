/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/storeSlice";
import ConfirmModal from "../Modal/ConfirmModal";
import { logOut } from "../../redux/auth/operation.js";

export function NavBar() {
  const [isExitModalOpen, setExitModalOpen] = useState(false);
  const [isAreYouSureModalOpen, setAreYouSureModalOpen] = useState(false);

  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLogin)
  const isLoggedIn = true;

  const handleExitClick = () => {
    setExitModalOpen(true); // Otwieramy modal "Do you really want to leave?" po kliknięciu "exit"
  };

  const closeExitModal = () => {
    setExitModalOpen(false); // Zamykamy modal  "Do you really want to leave?"
  };

  // Potwierdzenie w pierwszym oknie modalnym i otwarcie drugiego
  const confirmExit = () => {
    dispatch(logOut()); // Akcja wylogowania
    setExitModalOpen(false);
    console.log("User logged out");
    setAreYouSureModalOpen(true); // Otwieramy drugi modal "Are you sure?"
  };

  const closeAreYouSureModal = () => {
    setAreYouSureModalOpen(false); // Zamykamy modal "Are you sure?"
  };

  const confirmAreYouSure = () => {
    dispatch(logOut());
    console.log("User logged out");
    setAreYouSureModalOpen(false);
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

      {/* Modal "Are you sure?" */}
      <ConfirmModal
        isOpen={isAreYouSureModalOpen}
        onClose={closeAreYouSureModal}
        onConfirm={confirmAreYouSure}
        message="Are you sure?"
      />
    </div>
  );
}
