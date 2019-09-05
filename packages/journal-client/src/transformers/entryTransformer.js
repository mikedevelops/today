/**
 * Transform an entry to send to the API
 */
export default entry => ({
  content: entry.content,
  createdAt: entry.createdAt,
  id: entry.id,
});
