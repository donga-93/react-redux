import './App.css';
import PostList from '../src/features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import Navbar from './Navbar';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';
import NotificationsList from './features/notifications/NotificationsList';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Routes>
        <Route exact path="/" element={<><AddPostForm /> <PostList /></>} />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route exact path="/editPost/:postId" element={<EditPostForm />} />
        <Route exact path="/users" element={<UsersList />} />
        <Route exact path="/users/:userId" element={<UserPage />} />
        <Route exact path="/notifications" element={<NotificationsList />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
