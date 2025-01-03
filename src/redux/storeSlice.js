import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addUser, 
         signInUser, 
         signOutUser, 
         refreshUserToken} from "./auth/operation";
import { addUserIncome, 
         getUserIncome, 
         addUserExpense, 
         getUserExpense,
         deleteUserExpense,
         userIncomeCategory,
         userExpenseCategory,
         userTransactionPeriodDate} from "./transaction/operation";
import { userDetails, 
         setUserBalance} from "./user/operation";
import { initialState } from "./initialState";

const handlePending = (state) => {
    console.log("Pending")
    state.isLoading = true
    state.isError= null
};
const handleRejected = (state, action) => {
    console.log("Fail")
    state.isLoading = false
    state.isError= action.error.message;
    console.log(state.isError)
};


const storeSlice = createSlice({
    name: 'store',
    initialState: initialState,
    reducers:{
//1.readDataFromLocalStorage
        readDataFromLocalStorage: (state, action)=>{
            console.log("Readed",action.payload)
            state= JSON.parse(localStorage.getItem(`kapusta`))
        },
//2.saveDataToLocalStorage
        saveDataToLocalStorage: (state, action)=>{
            console.log("Saved",action.payload )
            localStorage.setItem(`kapusta`, JSON.stringify(state))
        },    
    },
    extraReducers: builder => {
        builder
//1.addUser
        .addCase(addUser.fulfilled,  (state,action) => {
            console.log("addUser",action.payload.user)
            state.isError = null
            state.isLoading = false
            state.isRegister = true
            state.email = action.payload.user.email
            state.userID = action.payload.user.id
        })
//2.signInUser
        .addCase(signInUser.fulfilled,  (state,action) => {
            console.log("signInUser", action.payload)
            state.isError = null
            state.isLoading = false
            state.isLogin = true
            state.token = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.userName = action.payload.userData.username
            state.email = action.payload.userData.email
            state.userID = action.payload.userData.id
            state.userAvatar = action.payload.userData.color
            state.isVerified = action.payload.userData.veryfi
            state.balance = action.payload.userData.balance
            action.payload.userData.transactions.forEach(transaction => {
                console.log(transaction)
                // if (transaction.typeOfTransaction.toLowerCase().includes("expense")){
                //     state.incomes = [...state.incomes, transaction]
                // }
                // else if (transaction.typeOfTransaction.toLowerCase().includes("income")){
                //     state.expenses =[...state.expenses, transaction]
                // }

            });

//          add transation
            
        })
//3.signOutUser      
        .addCase(signOutUser.fulfilled,  (state,action) => {
            console.log("signOutUser",action.payload)
            state.isLoading = false,
            state.isError = null
            state.isLogin = false
            state.isDelate = null
            state.isRegister = null
            state.isVerified = null
            state.token = null
            state.refreshToken = null
            state.sesionId = null   
            state.userName = null
            state.email = null
            state.balance = null
            state.totalIncome = null
            state.totalExpense = null
            state.incomes = []
            state.incomesCat = []
            state.incomesStat = {}
            state.expenses = []
            state.expenseCat = []
            state.expenseStat = {}
            state.transactionData ={}
        })
//4.refreshUserToken   not implemented     
        .addCase(refreshUserToken.fulfilled,  (state,action) => {
            console.log("refreshUserToken",action.payload)
            state.isLoading = false
            state.isError = null
        })
//5.addUserIncome
        .addCase(addUserIncome.fulfilled,  (state,action) => {
            console.log("addUserIncome",action.payload)
            state.isLoading = false
            state.isError = null
            state.balance = action.payload.newBalance
        })
//6.getUserIncome
        .addCase(getUserIncome.fulfilled,  (state,action) => {
            console.log("getUserIncome",action.payload.incomes)
            state.isLoading = false
            state.isError = null
            state.incomes = action.payload.incomes
            //state.incomesStat = action.payload.monthStats
        })
//7.addUserExpense
        .addCase(addUserExpense.fulfilled,  (state,action) => {
            console.log("addUserExpense",action.payload)
            state.isLoading = false
            state.isError = null
            state.balance = action.payload.newBalance
        })
//8.getUserExpense
        .addCase(getUserExpense.fulfilled,  (state,action) => {
            console.log("getUserExpense",action.payload.monthStats)
            state.isLoading = false
            state.isError = null
            state.expenses = action.payload.expense
            state.expenseStat = action.payload.monthStats
        })
//9.deleteUserExpense
        .addCase(deleteUserExpense.fulfilled,  (state,action) => {
            console.log("deleteUserExpense",action.payload)
            state.isLoading = false
            state.isError = null
            state.isDelate = true
            state.balance = action.payload.newBalance
        })
//10.userIncomeCategory
        .addCase(userIncomeCategory.fulfilled,  (state,action) => {
            console.log("userIncomeCategory",action.payload)
            state.isLoading = false
            state.isError = null
            state.incomesCat = action.payload
        })
//11.userExpenseCategory
        .addCase(userExpenseCategory.fulfilled,  (state,action) => {
            console.log("userExpenseCategory",action.payload)
            state.isLoading = false
            state.isError = null
            state.expenseCat = action.payload
        })
//12.userTransactionPeriodDate
        .addCase(userTransactionPeriodDate.fulfilled,  (state,action) => {
            console.log("userTransactionPeriodDate",action.payload)
            state.isLoading = false
            state.isError = null
        })
//13.userDetails
        .addCase(userDetails.fulfilled,  (state,action) => {
            console.log("userDetails",action.payload.balance)
            state.isError = null
            state.isLoading = false
            state.isLogin = true
            //state.userName = action.payload.username
            //state.email = action.payload.email
            //state.userID = action.payload.id
            //state.userAvatar = action.payload.color
            //state.isVerified = action.payload.veryfi
            state.balance = action.payload.balance
            action.payload.userData.transactions.forEach(transaction => {
                console.log(transaction)
                // if (transaction.typeOfTransaction.toLowerCase().includes("expense")){
                //     state.incomes = [...state.incomes, transaction]
                // }
                // else if (transaction.typeOfTransaction.toLowerCase().includes("income")){
                //     state.expenses =[...state.expenses, transaction]
                // }

            });

        })
//14.getUserBalance
        .addCase(setUserBalance.fulfilled,  (state,action) => {
            console.log("getUserBalance",action.payload)
            state.isLoading = false
            state.isError = null
        })
        .addMatcher(
            isAnyOf(
                addUser.pending,                                    //1   
                signInUser.pending,                                 //2
                signOutUser.pending,                                //3
                refreshUserToken.pending,                           //4
                addUserIncome.pending,                              //5
                getUserIncome.pending,                              //6
                addUserExpense.pending,                             //7
                getUserExpense.pending,                             //8
                deleteUserExpense.pending,                          //9
                userIncomeCategory.pending,                         //10
                userExpenseCategory.pending,                        //11
                userTransactionPeriodDate.pending,                  //12
                userDetails.pending,                                //13
                setUserBalance.pending,                             //14
            ),
            handlePending
        )
        .addMatcher(
            isAnyOf(
                addUser.rejected,                                   //1   
                signInUser.rejected,                                //2
                signOutUser.rejected,                               //3
                refreshUserToken.rejected,                          //4
                addUserIncome.rejected,                             //5
                getUserIncome.rejected,                             //6
                addUserExpense.rejected,                            //7
                getUserExpense.rejected,                            //8
                deleteUserExpense.rejected,                         //9
                userIncomeCategory.rejected,                        //10
                userExpenseCategory.rejected,                       //11
                userTransactionPeriodDate.rejected,                 //12
                userDetails.rejected,                               //13
                setUserBalance.rejected,                            //14
            ),
            handleRejected
        )

    }})

    export const selectLightTheme = (state)=>state.store.lightTheme
    export const selectIsLoading = (state)=>state.store.isLoading
    export const selectIsError = (state)=>state.store.isError
    export const selectIsLogin = (state)=>state.store.isLoading
    export const selectIsDelate = (state)=>state.store.isDelate
    export const selectIsRegister = (state)=>state.store.isRegister
    export const selectIsVerified = (state)=>state.store.isVerified
    export const selectToken = (state)=>state.store.token
    export const selectTefreshToken = (state)=>state.store.refreshToken
    export const selectSesionId  = (state)=>state.store.sesionId
    export const selectUserName = (state)=>state.store.userName
    export const selectEmail = (state)=>state.store.email
    export const selectUserID = (state)=>state.store.userID
    export const selectUserAvatar = (state)=>state.store.userAvatar
    export const selectBalance = (state)=>state.store.balance
    export const selectTotalIncome = (state)=>state.store.totalIncome
    export const selectTotalExpense = (state)=>state.store.totalExpense
    export const selectIncomes = (state)=>state.store.incomes
    export const selectIncomesCat = (state)=>state.store.incomesCat
    export const selectIncomesStat = (state)=>state.store.incomesStat
    export const selectExpense = (state)=>state.store.expenses
    export const selectExpenseCat = (state)=>state.store.expenseCat
    export const selectExpenseStat = (state)=>state.store.expenseStat
    export const selectTransactionData = (state)=>state.store.TransactionData       

export const { readDataFromLocalStorage,  saveDataToLocalStorage} = storeSlice.actions

export default storeSlice.reducer;         