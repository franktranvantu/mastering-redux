import {combineReducers} from '@reduxjs/toolkit';
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import userReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: userReducer
});