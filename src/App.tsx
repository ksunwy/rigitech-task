import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
