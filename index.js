const visit = require('unist-util-visit-parents')
const matter = require('gray-matter');

const plugin = (options) => {
  const transformer = async (ast, vfile) => {

    const fm = matter.read(vfile.path);

    if (fm.isEmpty)
	    return;

    if (!fm.hasOwnProperty('data') ||
        !fm.data.hasOwnProperty('autonumber_headings') || 
        !fm.data.autonumber_headings)
      return;

    let heading_nums = [ 0, 0, 0, 0, 0, 0 ];
    visit(ast, 'heading', (node) => {
      if (node.children.length > 0) {
        heading_nums[node.depth-1]++;
        node.children.unshift({
          type: 'text',
          value: `${heading_nums.slice(0, node.depth).join('.')} `,
        });        
      }
    });
  };
  return transformer;
};

module.exports = plugin
