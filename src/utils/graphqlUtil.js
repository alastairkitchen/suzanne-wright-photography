/*
 * return graphQL frontmatter object
 */
export const extractFrontMatterData = data => {

	if (data) {

		if (data.edges) {
			return data.edges[0].node.frontmatter;
		}
	} else {
		console.log('data is not defined')
	}


};
