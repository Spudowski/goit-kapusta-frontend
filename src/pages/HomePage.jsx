/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBalance } from "../redux/storeSlice";
import { LoginForm } from "../components/LoginForm/LoginForm";
import WelcomeModal from "../components/Modal/WelcomeModal";

export default function HomePage() {
  const balance = useSelector(selectBalance);

  const dispatch = useDispatch();
  const [isWelcomeModalOpen, setWelcomeModalOpen] = useState(false);

  // Otwieranie modala przy zerowym balance
  useEffect(() => {
    if (balance === 0) {
      setWelcomeModalOpen(true);

      // Automatyczne zamknięcie modala po 5 sekundach
      const timer = setTimeout(() => {
        setWelcomeModalOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [balance]);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
  };

  const handleConfirm = () => {
    const newBalance = prompt("Enter your balance:", "0");
    if (newBalance !== null && !isNaN(newBalance)) {
      // dispatch(setBalance(Number(newBalance)));
      setWelcomeModalOpen(false);
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      <LoginForm />
      <span>Balance: {balance} UAH</span>
      <button>Confirm</button>

      {/* Modal powitalny */}
      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={closeWelcomeModal}
        message="Hello! To get started, enter the current balance of your account!\nYou can't spend money until you have it :)"
      />
    </div>
  );
}
