import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Home } from "./page/HomePage";
import { PostPage } from "./page/ViewPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
