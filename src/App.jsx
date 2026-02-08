import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import BlogsDetails from "./components/blogsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
