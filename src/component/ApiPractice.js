import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiPractice = () => {

  const [meals, setMeals] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => {
        setMeals(res.data.meals);
      })
  }, [])

 
  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        setUsers(res.data.users);
      })
  }, [])

  

 

  


  return (
    <>
        <h1>Map function</h1>
        <div >
          {
            meals.map((meal) => (
            <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400}/>
            ))
          }
        </div>


<table className="table">
    <thead>
       <tr>
          <th>fname</th>
          <th>lname</th>
          <th>email</th>
          <th>address</th>
          <th>Bank details</th>

          

      </tr>

    </thead>
    <tbody>
      {
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
              <td>{"card expired on " + user.bank.cardExpire   +"card type is " + user.bank.cardType + "."}</td>
              

          </tr>
        ))
      } 
    </tbody>
  </table>

    </>
  )
}

export default ApiPractice;