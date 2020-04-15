
import axios from "axios";
import {
    GET_ALL_USERLIST 
  } from "./types";

export const userDetail = (user) => dispatch => {
    return new Promise((resolve,reject)=>{
        dispatch({
            type: GET_ALL_USERLIST,
            payload: user
          });
          resolve(true)
  })
  };




