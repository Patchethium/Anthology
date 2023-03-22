import type { PageLoad } from './$types';
import { marked } from 'marked'; // import the marked lib

export const load: PageLoad = async ({ fetch, params }) => {
  marked.setOptions({ silent: true });
  const slug = params['slug'];
  const res = await fetch(`/markdown/${slug}.md`);
  if (res.status !== 200) {
    throw new Error(`The blog post ${slug} doesn't exist`);
  }

  const post = await res.text();

  return {
    slug,
    post: marked.parse(post) // parse it as a html
  };
};
