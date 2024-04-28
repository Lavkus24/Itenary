import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store/store1';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/Iternary/TravelLists';
import SignIn from './Components/Account/SignIn';
import AddressForm from './Components/BookNow/AddressForm';
import PaymentForm from './Components/BookNow/PaymentFrom';
import SignUp from './Components/Account/SignUp';
import Activities from './Components/Activities/Activities';
import People from './Components/Tourist/People';
import AddPlaces from './Components/Admin/AddPlaces';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<List />} />
              <Route exact path="/SignIn" element={<SignIn />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/AddressForm" element={<AddressForm />} />
              <Route exact path="/PaymentForm" element={<PaymentForm />} />
              <Route exact path="/Activities" element={<Activities />} />
              <Route exact path="/People" element={<People />} />
              <Route exact path="/AddPlaces" element={<AddPlaces />} />
            </Routes>
          </>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
