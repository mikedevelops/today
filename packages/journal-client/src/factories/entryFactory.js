/**
 * @param {string} content
 * @param {moment.Moment} createdAt
 * @param {string|null} id
 * @param activities
 * @return {{createdAt: *, id: *, content: *}}
 */
export default (content, createdAt, id = null, activities = []) => ({
  content,
  createdAt,
  id,
  activities,
});
