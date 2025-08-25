import { gql, GraphQLClient } from 'graphql-request';
import { Category, Posts } from './types';

const baseUrl = process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT;
const client = new GraphQLClient(`${baseUrl}`);

export async function getCategories(): Promise<Category[]> {
  const query = gql`
    query getCategories  {
      categories(first:100) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;
  try {
    const data: { categories: { nodes: Category[] } } = await client.request(query);
    return data?.categories?.nodes;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getPosts() {
  const query = gql`
    query getPosts  {
      posts {
        nodes {
          id
          title
          date
          excerpt
          slug
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              id
              altText
              filePath
            }
          }
        }
      }
    }
  `;
  try {
    const data: { posts: { nodes: Posts[] } } = await client.request(query);
    return data?.posts?.nodes;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function GetLatestPosts(first: number = 5) {
  const query = gql`
    query getPosts  {
      posts(first: ${first}, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          id
          title
          date
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    } 
  `;
  try {
    const data: { posts: { nodes: Posts[] } } = await client.request(query);
    return data?.posts?.nodes
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }
}

export async function GetPostBySlug(slug) {
  const query = gql`
      query GetPostBySlug  {
        post(id: ${slug}, idType: SLUG) {
        title
        content
        date
        author {
          node {
            id
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    } 
  `;
  try {
    const data = await client.request(query);
    return data?.post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function GetPageDate(slug) {
  const query = gql`
      query GetPageByUri {
        nodeByUri(uri: "${slug}") {
          ... on Page {
            title
            content
          }
        }
      }
    `
  ;
  try {
    const data = await client.request(query);
    return data?.nodeByUri;
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}
