import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags';
import slugify from 'slugify'
import SEO from "../components/SEO";
 
const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <SEO title="Tags" />

      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;

            return (
              <Link to={`/tags/${slugify(text, {lower: true})}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;
