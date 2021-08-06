import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useState, useEffect } from 'react';

import { Home } from './Home';
import { About } from './About';
import { Register } from './Register';
import { Login } from './Login';
import { Logout } from './Logout';
import { Detail } from './Detail';
import { AddData } from './Admin/AddData';

export function Content(props) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()
  const [bookData, setBookData] = useState()

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    if (!bookData) {
      readData()
        .then((data) => {
          console.log(data)
          setBookData(data)
        })
        .catch((error) => console.log(error))
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true)
        setUser(user)
        props.authHandler(true)
      }
      else {
        setAuth(false)
        setUser(null)
        props.authHandler(false)
      }
    })
  }, [bookData])

  const db = firebase.firestore()


  const addData = (data) => {
    return new Promise((resolve, reject) => {
      db.collection('books').add(data)
        .then(() => resolve(true))
        .catch((error) => reject(error))
    })
  }

  const readData = () => {
    return new Promise((resolve, reject) => {
      db.collection('books').onSnapshot((querySnapshot) => {
        let books = []
        querySnapshot.forEach((doc) => {
          let book = doc.data()
          book.id = doc.id
          books.push(book)
        })
        resolve(books)
      })
    })
  }

  const getDetail = (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
      db.collection('books').doc(id).get()
        .then((doc) => {
          resolve(doc.data())
        })
        .catch((error) => reject(error))
    })
  }

  const storage = firebase.storage()

  // example path 'books/covers/image1.jpg'
  const addImage = (path, image) => {
    return new Promise((resolve, reject) => {
      storage.ref(path).put(image)
        .then(() => {
          storage.ref(path).getDownloadURL()
            .then((url) => resolve(url))
            .catch((errors) => reject(errors))
        })
        .catch((errors) => reject(errors))
    })
  }

  const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // do something with the user object
        //console.log( userCredential.user.uid )
        setUser(userCredential.user)
        setAuth(true)
        props.authHandler(true)
      })
      .catch((error) => {
        // do something with the error
        console.log(error)
      })
  }

  const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setUser(userCredential.user)
          setAuth(true)
          props.authHandler(true)
          resolve( true )
        })
        .catch((error) => {
          // do something with the error
          console.log(error)
          reject( error )
        })
    })
  }

  const logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        // do something after signout
        setUser(null)
        setAuth(false)
        props.authHandler(false)
      })
  }

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home data={bookData} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register handler={registerUser} />
        </Route>
        <Route path="/login">
          <Login handler={loginUser} />
        </Route>
        <Route path="/logout">
          <Logout handler={logoutUser} />
        </Route>
        <Route path="/book/:bookId">
          <Detail handler={getDetail} auth={auth} />
        </Route>
        <Route path="/add">
          <AddData handler={addData} imageHandler={addImage} />
        </Route>
      </Switch>
    </div>
  )
}