import { Route, Switch } from 'react-router-dom';
import Users from './containers/Users';

const usersRoutes = () => (
    <Switch>
        <Route exact path='users' component={Users} />
    </Switch>
)