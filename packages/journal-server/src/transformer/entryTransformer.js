module.exports = (entry) => {
  return {
    id: entry._id,
    content: entry.content,
    createdAt: entry.createdAt,
  };
};
