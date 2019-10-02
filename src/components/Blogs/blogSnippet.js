import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import "./blogSnippet.css";

const BlogSnippet = ({ date, excerpt, path, tags, summary, title, author }) => (
  <section className="blogContainer">
    <Link
        style={{ textDecoration: 'none' }}
        aria-label={title}
        to={path}
    >
    <div>
      <Container>
        <h1>{title}</h1>
        <div>
          {summary ? summary : excerpt}
        </div>
        <div>Created by <b>{author}</b> on {date}.</div>
        {tags && (
          <ul className="ul-blog">
            <li className="ul-blog li-blog">Tags:</li>
            {tags.map(tag => (
              <li className="ul-blog li-blog">
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div> 
    </Link>
  </section>
);

export default BlogSnippet;