/**
 * @param type
 * @param icon
 * @param name
 * @param {string|null} id
 * @return {{createdAt: *, id: *, content: *}}
 */
export default (type, icon, name, id = null) => ({
  type,
  icon,
  id,
  name
});
