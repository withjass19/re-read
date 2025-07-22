import React from 'react'
import Layout from '../Layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Books from '../pages/Books/Books'
// import AllBooks from '../pages/Books/allBooks/AllBooks';
import BookDetails from '../pages/Books/BookDetails/BookDetaile'
import SellBook from '../pages/Books/SellBooks/SellBook'
import Account from '../pages/Account/Account'
import Dashboard from '../pages/Dashboard/Dashboard'
import UploadBook from '../pages/Dashboard/_components/UploadBook'
// import AllPublishedBooks from '../pages/Dashboard/_components/MyBooks'
import AllChats from '../pages/Dashboard/_components/AllChats/AllChats'
import MyBooks from '../pages/Dashboard/_components/MyBooks'
import NotFound from '../pages/NotFound'
import AllBooks from '../pages/Books/AllBooks/AllBooks'

const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>

            {/* Books routes */}
            <Route path='/books' element={<Books/>}/>
            <Route path='/books/all-books' element={<AllBooks/>}/>
            <Route path='/books/book/:id' element={<BookDetails/>}/>
            {/* <Route path='/books/book-detailes' element={<BookDetails/>}/> */}
            <Route path='/books/book-sell' element={<SellBook/>}/>

            {/* User */}
            <Route path='/user/account' element={<Account/>}/>
            <Route path='/user/dashboard' element={<Dashboard/>}>
              <Route index element={<MyBooks/>}/>
              <Route path='upload-book' element={<UploadBook/>}/>
              <Route path='all-chats' element={<AllChats/>}/>
              <Route path='all-chats/chat/:id' element={<AllChats/>}/>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default AppRoutes
