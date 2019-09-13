import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import "./blogSnippet.css";

const BlogSnippet = ({ date, excerpt, path, tags, summary, title }) => (
  <section className="post-sample">
    <Link
      aria-label={title}
      to={path}
    >
      <Container>
        <h1 >{title}</h1>
        <div >{date}</div>

        <div >
          {summary ? summary : excerpt}
        </div>

        {tags && (
          <ul >
            {tags.map(tag => (
              <li >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Link>
  </section>
);

export default BlogSnippet;