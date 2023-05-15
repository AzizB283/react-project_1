import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../actions/action';
import { randomJoke } from '../actions/action';

function Profile() {
    const dispatch = useDispatch();
    const selectors = useSelector((state) => state.update )

   const updateName = () => {
    dispatch(changeName())
   }

   const getJoke = () => {
    dispatch(randomJoke())
   }
  return (
    <>
        <h2>Hi, my name is {selectors.name}</h2>
        <p>My age is {selectors.age}</p>

        <button onClick={updateName}>Update Name</button>

        <div>
        <h4>{selectors.joke}</h4>
            <button onClick={getJoke}>Get a Joke</button>
        </div>
    </>
  )
}

export default Profile