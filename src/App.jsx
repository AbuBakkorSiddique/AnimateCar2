import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
function App() {
  return (
<>
<div>
<Router>

<Routes>
  <Route path="/" element={<HomePages />} />

</Routes>
</Router>
</div>


</>
  )
}

export default App