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
         getUserBalance} from "./user/operation";
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
};


const storeSlice = createSlice({
    name: 'store',
    initialState: initialState,
    reducers:{
//1.readDataFromLocalStorage
        readDataFromLocalStorage: (state, action)=>{
            console.log("Readed",action.payload)
        },
//2.saveDataToLocalStorage
        saveDataToLocalStorage: (state, action)=>{
            console.log("Saved",action.payload )
        },    
    },
    extraReducers: builder => {
        builder
//1.addUser
        .addCase(addUser.fulfilled,  (state,action) => {
            console.log("addUser",action.payload)
        })
//2.signInUser
        .addCase(signInUser.fulfilled,  (state,action) => {
            console.log("signInUser", action.payload)
            state.isLoading = false
        })
//3.signOutUser      
        .addCase(signOutUser.fulfilled,  (state,action) => {
            console.log("signOutUser",action.payload)
        })
//4.refreshUserToken        
        .addCase(refreshUserToken.fulfilled,  (state,action) => {
            console.log("refreshUserToken",action.payload)
        })
//5.addUserIncome
        .addCase(addUserIncome.fulfilled,  (state,action) => {
            console.log("addUserIncome",action.payload)
        })
//6.getUserIncome
        .addCase(getUserIncome.fulfilled,  (state,action) => {
            console.log("getUserIncome",action.payload)
        })
//7.addUserExpense
        .addCase(addUserExpense.fulfilled,  (state,action) => {
            console.log("addUserExpense",action.payload)
        })
//8.getUserExpense
        .addCase(getUserExpense.fulfilled,  (state,action) => {
            console.log("getUserExpense",action.payload)
        })
//9.deleteUserExpense
        .addCase(deleteUserExpense.fulfilled,  (state,action) => {
            console.log("deleteUserExpense",action.payload)
        })
//10.userIncomeCategory
        .addCase(userIncomeCategory.fulfilled,  (state,action) => {
            console.log("userIncomeCategory",action.payload)
        })
//11.userExpenseCategory
        .addCase(userExpenseCategory.fulfilled,  (state,action) => {
            console.log("userExpenseCategory",action.payload)
        })
//12.userTransactionPeriodDate
        .addCase(userTransactionPeriodDate.fulfilled,  (state,action) => {
            console.log("userTransactionPeriodDate",action.payload)
        })
//13.userDetails
        .addCase(userDetails.fulfilled,  (state,action) => {
            console.log("userDetails",action.payload)
        })
//14.getUserBalance
        .addCase(getUserBalance.fulfilled,  (state,action) => {
            console.log("getUserBalance",action.payload)
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
                getUserBalance.pending,                             //14
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
                getUserBalance.rejected,                            //14
            ),
            handleRejected
        )

    }})

export const selectLightTheme = (state)=>state.data.lightTheme
export const selectIsLoading = (state)=>state.store.isLoading
export const selectIsError = (state)=>state.store.isError
export const selectIsLogin = (state)=>state.store.isLogin
export const selectIsDelate = (state)=>state.data.isDelate
export const selectIsRegister = (state)=>state.data.isRegister
export const selectToken = (state)=>state.data.token
export const selectTefreshToken = (state)=>state.data.refreshToken
export const selectSesionId  = (state)=>state.data.sesionId
export const selectUserName = (state)=>state.data.userName
export const selectEmail = (state)=>state.data.email
export const selectIncomes = (state)=>state.data.incomes
export const selectIncomesCat = (state)=>state.data.incomesCat
export const selectExpense = (state)=>state.data.expense
export const selectExpenseCat = (state)=>state.data.expenseCat
export const selectTransactionData = (state)=>state.data.TransactionData       
export const selectBalance = (state) => state.store.balance;
export const selectIncomesStat = (state) => state.store.incomesStat;
export const selectExpenseStat = (state) => state.store.expenseStat;

export const { readDataFromLocalStorage,  saveDataToLocalStorage} = storeSlice.actions

export default storeSlice.reducer;