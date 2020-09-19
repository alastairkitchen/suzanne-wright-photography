/*
 * return graphQL frontmatter object
 */
export const extractFrontMatterData = data => {

	if (data) {

		if (data.edges.length > 0) {

			if (data.edges[0].node) {
				return data.edges[0].node.frontmatter;
			}
		}
	} else {
		console.log('data is not defined')
	}


};
