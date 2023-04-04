import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={ <SignIn/> } />
            <Route path="/register" element={ <SignUp/> } />

            <Route path="/dashboard" element={ <Dashboard/> } />
        </Routes>
    )
}

export default RoutesApp;