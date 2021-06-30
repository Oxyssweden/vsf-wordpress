// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getContentId = (post) => String(post.databaseId);
export const getContentTitle = (post) => post.title;

const contentGetters = {
  getId: getContentId,
  getTitle: getContentTitle
};

export default contentGetters;
