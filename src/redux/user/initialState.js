// export const initialState ={
//     "userName": null,
//     "email": null,
//     "token": null,
//     "balance": null,
//     "transactions": []
// }

export const initialState = {
  userName: "Olaf",
  email: "test@email.com",
  token: "1ertweegsdgft34tgagdfgtry56u7u6i87gfqewfqer23r132r",
  balance: 1000,
  transactions: [
    {
      description: "1Transaction's description",
      category: "Продукты",
      amount: 10,
      date: "2020-12-31",
      _id: "507f1f77bcf86cd799439013",
    },
    {
      description: "2Transaction's description",
      category: "Продукты",
      amount: 30,
      date: "2020-12-31",
      _id: "507f1f77bcf86cd799439013",
    },
    {
      description: "3Transaction's description",
      category: "Продукты",
      amount: 50,
      date: "2020-12-31",
      _id: "507f1f77bcf86cd799439013",
    },
  ],
};
