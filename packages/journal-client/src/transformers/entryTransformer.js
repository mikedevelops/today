import activityTransformer from './activityTransformer';

/**
 * Transform an entry to send to the API
 * @param {Entry} entry
 */
export default (entry) => {
    return {
        date: entry.getDate(),
        content: entry.getContent(),
        activities: entry.getActivities().map(activityTransformer),
        id: entry.getId(),
    };
};
