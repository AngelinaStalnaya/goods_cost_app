import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

const Profile = ({ authorized, userCalculations, userName,getUserCalculationsAsync  }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) navigate("/");
  });

  useEffect(() => {
    dispatch(getUserCalculationsAsync(userName))
  })

  return (
    <div>
      <h1>Profile page</h1>
      {userCalculations ? (
        <>
          <h2>The list of your calculations:</h2>
          <ul>
            {userCalculations?.map((item, index) => {
              return (
                <li key={index}>
                  {item.name}
                  <Link to={`/calculation/${item.name}`} state={{id: item._id}}>See in details</Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h2>You did not save any calculation</h2>
      )} 
    </div>
  );
};

export default Profile;
