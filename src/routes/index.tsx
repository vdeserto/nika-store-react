import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home   from '../pages/Home'

render( 
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" exact component={Landing}/> */}
            <Route index path="/home" element={<Home/>}/>

            {/* <Route path="/orphanages/create" element={CreateOrphanage}/>
            <Route path="/orphanages/:id" element={Orphanage}/> */}
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')    
)

