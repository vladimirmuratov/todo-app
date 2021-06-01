import React from "react";
import {FormPost} from "./components/FormPost";
import {Posts} from "./components/Posts";
import {AsyncPosts} from "./components/AsyncPosts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>Form Post</h5>
          <FormPost/>
          <h5>Posts</h5>
          <Posts/>
        </div>
        <div className="col">
          <h5>Async Posts</h5>
          <AsyncPosts/>
        </div>
      </div>

    </div>
  );
}

export default App;
