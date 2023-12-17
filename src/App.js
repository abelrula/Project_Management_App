  import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Layout from "./Componenets/Layout"
 import { Home, MyTask } from "./pages";
 import AddTodo from "./pages/AddTodo/AddTodo";
 import CalanderSchedules from "./pages/calanderSchedules/CalanderSchedules";
 import Report from "./pages/report/Report";
 import Messages from "./pages/message/Messages";
 import Videoconfrence from "./pages/videoConfrence/Videoconfrence";
 import Team from "./pages/team/Team";
 import ProjectOverview from "./pages/projectOverView/ProjectOverview";
 const App = () => {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route path="home" element={<Home />} />
           <Route path="mytasks" element={<MyTask />} />
           <Route path="schedule" element={<CalanderSchedules />} />
           <Route path="overview" element={<ProjectOverview />} />
           <Route path="report" element={<Report />} />
           <Route path="team" element={<Team />} />
           <Route path="message" element={<Messages />} />
           <Route path="videoconfrence" element={<Videoconfrence />} />
           <Route path="addTodo" element={<MyTask />} />
           <Route path="addTodo" element={<MyTask />} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
 };

export default App