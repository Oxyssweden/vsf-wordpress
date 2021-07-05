// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getContentId = (post) => String(post.databaseId);
export const getContentTitle = (post) => post.title;
export const getContentSlug = (post) => post.slug;

const contentGetters = {
  getId: getContentId,
  getTitle: getContentTitle,
  getSlug: getContentSlug
};

export default contentGetters;
