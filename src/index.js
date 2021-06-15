import configureStore from "./store/configureStore";
import * as projectActions from './store/projects';
import * as bugActions from './store/bugs';

const store = configureStore();

store.dispatch(projectActions.projectAdded({name: 'Project 1'}));
store.dispatch(bugActions.bugAdded({description: 'Bug 1'}));
store.dispatch(bugActions.bugAdded({description: 'Bug 2'}));
store.dispatch(bugActions.bugAdded({description: 'Bug 3'}));
store.dispatch(bugActions.bugResolved({id: 1}));

console.log(store.getState());