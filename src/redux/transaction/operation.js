import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
  });


//Add an income

export const addUserIncome = createAsyncThunk(
    'addUserIncome/fetchAddUserIncome', 
    async(income, token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('/transaction/income',
            //income
            {
                "description": "Income description",
                "amount": 100,
                "date": "2020-12-31"
            }
        )
        return resp.data
})

//Get income stats

export const getUserIncome = createAsyncThunk(
    'getUserIncome/fetchGetUserIncome', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/income')
        return resp.data
})


//Add an expense
export const addUserExpense = createAsyncThunk(
    'addUserExpense/fetchAddUserExpense', 
    async(expense, token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('/transaction/expense',
            //expense
            {
                "description": "Expense description",
                "amount": 100,
                "date": "2020-12-31",
                "category": "Sellary"
              }
        )
        return resp.data
})

//Get expense stats
export const getUserExpense = createAsyncThunk(
    'getUserExpense/fetchGetUserExpense', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/expense')
        return resp.data
})

// Delete transaction
export const deleteUserExpense = createAsyncThunk(
    'deleteUserExpense/fetchDeleteUserExpense', 
    async(transactionId,token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get(`/transaction/${transactionId}`)
        return resp.data
})


//Get categories for incomes

export const userIncomeCategory = createAsyncThunk(
    'userIncomeCategory/fetchUserIncomeCategory', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/income-categories')
        return resp.data
})


//Get categories for expenses

export const userExpenseCategory = createAsyncThunk(
    'userExpenseCategory/fetchUserExpenseCategory', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/transaction/expense-categories')
        return resp.data
})

//Get transactions data for a specific period

export const userTransactionPeriodDate = createAsyncThunk(
    'userTransactionPeriodDate/fetchUserTransactionPeriodDate', 
    async(startDate, endDate, token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get(`/transaction/period-data?startDate=${startDate}&endDate=${endDate}`)
        return resp.data
})