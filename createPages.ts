import * as config from './src/utils/siteConfig';
import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { any } from 'prop-types';

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

interface Slug {
	slug: string;
}

interface AllContentfulPost {
	allContentfulPost: {
		edges: Array<{
			node: Slug
		}>
	}
}


export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const loadPosts = new Promise((resolve) => {
		graphql<AllContentfulPost>(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
			const posts = result.data.allContentfulPost.edges;
			const postsPerFirstPage = config.postsPerHomePage;
			const postsPerPage = config.postsPerPage;
			const numPages = Math.ceil(
				posts.slice(postsPerFirstPage).length / postsPerPage
			);

			createPage({
				path: `/blog`,
				component: path.resolve(`./src/templates/blog.js`),
				context: {
					limit: postsPerFirstPage,
					skip: 0,
					numPages: numPages + 1,
					currentPage: 1,
				},
			});

			// Create additional pagination on home page if needed
			Array.from({ length: numPages }).forEach((_, i) => {
				createPage({
					path: `/blog/${i + 2}`,
					component: path.resolve(`./src/templates/blog.js`),
					context: {
						limit: postsPerPage,
						skip: i * postsPerPage + postsPerFirstPage,
						numPages: numPages + 1,
						currentPage: i + 2,
					},
				})
			});

			// Create each individual post
			posts.forEach((edge, i) => {
				const prev = i === 0 ? null : posts[i - 1].node;
				const next = i === posts.length - 1 ? null : posts[i + 1].node;
				createPage({
					path: `blog/${edge.node.slug}/`,
					component: path.resolve(`./src/templates/post.js`),
					context: {
						slug: edge.node.slug,
						prev,
						next,
					},
				})
			});
			resolve()
		})
	});

	const loadProducts = (productType: string) => {
		const endPoint = `allContentful${capitalize(productType)}`;
		graphql(`{
        ${endPoint} {
          nodes {
            slug
            types {
			        slug
			        title
			      }
            categories {
			        slug
			        title
			      }
          }
        }
      }`).then(result => {
			const products = result.data[endPoint].nodes;
			const categorySet = new Set<string>();
			const typeSet = new Set<string>();
			products.forEach((product) => {
				// categories is productClassField
				product.categories.forEach((category) => {
					categorySet.add(JSON.stringify(category));
				});
				// crustType is productTypeField
				product.types.forEach((type) => {
					typeSet.add(JSON.stringify(type));
				});
			});
			const categories = Array.from(categorySet).map(category => JSON.parse(category));
			const types = Array.from(typeSet).map(type => JSON.parse(type));
			products.forEach(({slug }) => {
				createPage({
					path: `/${productType}/${slug}`,
					component: path.resolve(`./src/templates/${productType}/product.js`),
					context: {
						slug,
					},
				});
			});
			createPage({
				path: `/${productType}/`,
				component: path.resolve(`./src/templates/${productType}/catalog.tsx`),
				context: {
					categories,
					types,
					productType: productType,
				},
			});
			categories.forEach((category) => {
				createPage({
					path: `/${productType}/${category.slug}`,
					component: path.resolve(`./src/templates/${productType}/catalogByCategory.tsx`),
					context: {
						categorySlug: category.slug,
						categories,
						types,
						productType: productType,
					},
				});
			});
			types.forEach((type) => {
				createPage({
					path: `/${productType}/${type.slug}`,
					component: path.resolve(`./src/templates/${productType}/catalogByType.tsx`),
					context: {
						typeSlug: type.slug,
						categories,
						types,
						productType: productType,
					},
				});
				categories.forEach((category) => {
					createPage({
						path: `/${productType}/${type.slug}/${category.slug}`,
						component: path.resolve(`./src/templates/${productType}/catalogByCategoryAndType.tsx`),
						context: {
							categorySlug: category.slug,
							typeSlug: type.slug,
							categories,
							types,
							productType: productType,
						},
					});
				});
			});
		});
	};

	const loadMainPage = new Promise((resolve) => {
		const postsPerFirstPage = config.postsPerHomePage;

		// Create main home page
		createPage({
			path: `/`,
			component: path.resolve(`./src/templates/index.js`),
			context: {
				limit: postsPerFirstPage,
				skip: 0,
			},
		});
		resolve()
	});

	const loadTags = new Promise((resolve) => {
		graphql<any>(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
			const tags = result.data.allContentfulTag.edges;
			const postsPerPage = config.postsPerPage;

			// Create tag pages with pagination if needed
			tags.map(({ node }) => {
				const totalPosts = node.post !== null ? node.post.length : 0;
				const numPages = Math.ceil(totalPosts / postsPerPage);
				Array.from({ length: numPages }).forEach((_, i) => {
					createPage({
						path:
							i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
						component: path.resolve(`./src/templates/tag.js`),
						context: {
							slug: node.slug,
							limit: postsPerPage,
							skip: i * postsPerPage,
							numPages: numPages,
							currentPage: i + 1,
						},
					})
				})
			});
			resolve()
		})
	});

	const loadPages = new Promise((resolve, reject) => {
		graphql<any>(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
			const pages = result.data.allContentfulPage.edges
			pages.map(({ node }) => {
				createPage({
					path: `${node.slug}/`,
					component: path.resolve(`./src/templates/page.js`),
					context: {
						slug: node.slug,
					},
				})
			});
			resolve()
		})
	});

	return Promise.all([
		loadMainPage,
		loadProducts('pizza'),
		loadPosts,
		loadTags,
		loadPages
	]);
};
