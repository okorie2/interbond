import { Fragment } from "react";

function Post() {
  return (
    <Fragment>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers"></div>
        <div className="side-bar">
          <Sidenav />
        </div>
      </section>
      <button className="myButton">
        <Link to="/">
          <h3>home page</h3>
        </Link>
      </button>
    </Fragment>
  );
}

export default Post;
