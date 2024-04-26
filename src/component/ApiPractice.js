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
        console.log(res.data.users[0].age);
        setUsers(res.data.users);
      })
  }, [])

 

  


  return (
    <>
        <h1>Map function</h1>
        <div>
          {
            meals.map((meal) => (
            <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400}/>
            ))
          }
        </div>


<table class="table">
    <thead>
       <tr>
          <th>fname</th>
          <th>lname</th>
          <th>email</th>
          <th>address</th>
          

      </tr>

    </thead>
    <tbody>
      {
        users.map((user) => (
          <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>


          </tr>
        ))
      } 
    </tbody>
  </table>

    </>
  )
}

export default ApiPractice;