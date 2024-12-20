// export const initialState ={
//     lightTheme: true,
//     isLoading: false,
//     isError: null,
//     isLogin: false,
//     isDelate: null,
//     isRegister: null,
//     isVerified: null,
//     token: null,
//     refreshToken:null,
//     sesionId: null,
//     userName: null,
//     email: null,
//     balance: null,
//     totalIncome:null,
//     totalExpense:null,
//     incomes: [],
//     incomesCat: [],
//     incomesStat: {},
//     expense: [],
//     expenseCat: [],
//     expenseStat: {},
//     transactionData:{}
// }


 export const initialState ={
    lightTheme: true,
    isLoading: false,
    isError: null,
    isLogin: true,
    isDelate: null,
    isRegister: true,
    token: "sadfasgergrshbsbdgjyujtyhsrtggsegsrtg",
    refreshToken:"sadfasgergrshbsbdgjyujtyhsrtggsegsrtg",
    sesionId: "sadfasgergrshbsbdgjyujtyhsrtggsegsrtg",   
    userName: "Olaf",
    email: "Olaf@gmail.com",
    balance: 100000,
    incomes: [      {
        "description": "1Transaction's description",
        "category": "Продукты",
        "amount": 100,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      },
      {
        "description": "2Transaction's description",
        "category": "Продукты",
        "amount": 300,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      },
      {
        "description": "3Transaction's description",
        "category": "Продукты",
        "amount": 500,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      }],
    incomesCat: ['salary', 'garage sale', 'income from renting apartment'],
    incomesStat: {January:1000,  February:2000, March:500, April:800, May:300, June:2500, July:400, August:800, September:0, October:200, November:9000, December:5000},
    expense: [      {
        "description": "1Transaction's description",
        "category": "Продукты",
        "amount": 1000,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      },
      {
        "description": "2Transaction's description",
        "category": "Продукты",
        "amount": 3000,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      },
      {
        "description": "3Transaction's description",
        "category": "Продукты",
        "amount": 5000,
        "date": "2020-12-31",
        "_id": "507f1f77bcf86cd799439013"
      }],
    expenseCat: ['education', 'food', 'clothes', 'entertainment', 'transport' ],
    expenseStat: {January:4000,  February:1000, March:3500, April:600, May:3000, June:2000, July:1400, August:2500, September:800, October:2000, November:900, December:500},
    transactionData:{}

}
