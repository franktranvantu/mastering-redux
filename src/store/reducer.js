import {combineReducers} from '@reduxjs/toolkit';
import entitiesProducer from './entities';

export default combineReducers({
  entities: entitiesProducer
});