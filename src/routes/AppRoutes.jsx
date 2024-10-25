import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage, { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import PostsPage, { Post, PostList} from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginFormUncontrolled from "../components/LoginFormUncontrolled";

function AppRoutes(props) {

  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      {/* /dash */}
      <Route path="/dash" element={
        <ProtectedRoute>
          <DashboardPage {...props}/>
        </ProtectedRoute>
      }>
        {/* /dash/messages */}
        <Route path="messages" element={<DashboardMessages />} />
        {/* /dash/tasks */}
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginFormUncontrolled />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>

      <Route path="/about" element={<AboutPage {...props}/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes;