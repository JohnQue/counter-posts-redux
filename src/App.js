import React from 'react';
import PostListPage from './pages/PostListPage';
import { Route } from 'react-router';
import TodoPage from './pages/TodoPage';
import CounterPage from './pages/CounterPage';
import PostPage from './pages/PostPage';
function App() {
  return (
    <>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/todo" component={TodoPage} />
    </>
  );
}

export default App;
