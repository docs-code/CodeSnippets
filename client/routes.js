/* eslint-disable max-len */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Login,
  Signup,
  AllGroups,
  SingleGroup,
  AllUsers,
  SingleUser,
  AllNotebooks,
  SingleNotebook,
  CreateGroup,
  CreateNotebook,
  EditProfile,
} from './components';
import Snippet from './components/Snippet';

/**
 * COMPONENT
 */
const Routes = ({ serverAwake }) => (
  <Switch>
    {/* Routes placed here are available to all visitors */}

    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />

    <Route exact path="/singleUser" component={SingleUser} />

    <Route exact path="/groups" component={AllGroups} /> {/* all groups ever */}
    <Route exact path="/groups/new" component={CreateGroup} />
    <Route exact path="/groups/:groupId" component={SingleGroup} /> {/* this group */}
    <Route exact path="/groups/:groupId/users" component={AllUsers} /> {/* filtered by who's in this group */}
    <Route exact path="/groups/:groupId/notebooks" component={AllNotebooks} /> {/* all notebooks for this group */}


    <Route exact path="/users" component={AllUsers} /> {/* all users ever */}
    <Route exact path="/users/:userId" component={SingleUser} /> {/* this user */}
    <Route exact path="/users/:userId/edit" component={EditProfile} /> {/* this user */}
    <Route exact path="/users/:userId/groups" component={AllGroups} /> {/* filtered by who's in this user */}
    <Route exact path="/users/:userId/notebooks" component={AllNotebooks} /> {/* all notebooks for this user */}

    <Route exact path="/notebooks" component={AllNotebooks} /> {/* created by anyone, ever */}
    <Route
      exact
      path="/notebooks/:notebookId"
      render={(routeProps) => {
        return <SingleNotebook {...routeProps} serverAwake={serverAwake} />;
      }}
    /> {/* this notebook */}

    {
      /*
      web security standing questions:
        - what routes can an anonymous user not access?
        - what routes can a logged-in, non-admin user not access?
        - should group editing be limited to only some logged-in users?
        - how can we prevent the malicious creation of an admin user in firestore? (see firestore db "rules")
      */
    }

    {/* Displays our Notebook component as a fallback */}
    <Route component={CreateNotebook} /> {/* empty notebook */}
  </Switch>
);

export default Routes;
