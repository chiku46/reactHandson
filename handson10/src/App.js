import logo from './logo.svg';
import './App.css';
import { Blog, books, courses, posts } from './Components/Blogging';

function App() {
  return (
    <div className="App">
      <Blog posts={posts} courses={courses} books={books}/>
    </div>
  );
}

export default App;
