import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificRestaurant from './components/SpecificRestaurant'
import Cart from './components/Cart'
import PaymentSuccessful from './components/PaymentSuccessful'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/restaurants/:id"
        component={SpecificRestaurant}
      />
      <ProtectedRoute exact path="/Cart" component={Cart} />
      <ProtectedRoute
        exact
        path="/payment-successful"
        component={PaymentSuccessful}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
