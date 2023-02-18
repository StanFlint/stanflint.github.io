import adapter from '@sveltejs/adapter-static';
 
export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true
    })
  }
};