/*
 * return graphQL frontmatter object
 */
export const extractFrontMatterData = data => {

	return data.edges[0].node.frontmatter;

};
