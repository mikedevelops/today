/**
 * @param {string} content
 * @param {moment.Moment} createdAt
 * @param {string|null} id
 * @return {{createdAt: *, id: *, content: *}}
 */
export default (content, createdAt, id = null) => ({
  content,
  createdAt,
  id,
});
