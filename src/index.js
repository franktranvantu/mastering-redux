import configureStore from "./store/configureStore";
import * as projectActions from './store/projects';
import {bugAdded, bugResolved, bugAssignedToUser, getBugsByUser} from './store/bugs';
import {userAdded} from './store/users';

const store = configureStore();

store.dispatch(userAdded({name: 'User 1'}));
store.dispatch(userAdded({name: 'User 2'}));

store.dispatch(projectActions.projectAdded({name: 'Project 1'}));

store.dispatch(bugAdded({description: 'Bug 1'}));
store.dispatch(bugAdded({description: 'Bug 2'}));
store.dispatch(bugAdded({description: 'Bug 3'}));
store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}));
store.dispatch(bugResolved({id: 1}));
