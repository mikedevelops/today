/**
 * @param {Activity} activity
 */
export default (activity) => {
    return {
        type: activity.getType(),
        name: activity.getName(),
        label: activity.getLabel(),
        value: activity.getValue(),
    };
};
