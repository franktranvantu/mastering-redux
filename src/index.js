import configureStore from "./store/configureStore";
import * as projectActions from './store/projects';
import {bugAdded, bugResolved, getUnresolvedBugs} from './store/bugs';

const store = configureStore();

store.dispatch(projectActions.projectAdded({name: 'Project 1'}));
store.dispatch(bugAdded({description: 'Bug 1'}));
store.dispatch(bugAdded({description: 'Bug 2'}));
store.dispatch(bugAdded({description: 'Bug 3'}));
store.dispatch(bugResolved({id: 1}));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(store.getState());
console.log(unresolvedBugs);