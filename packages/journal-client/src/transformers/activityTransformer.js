/**
 * @param {Activity} activity
 */
export default (activity) => {
    return {
        id: activity.getId(),
        type: activity.getType(),
        name: activity.getName(),
        label: activity.getLabel(),
        value: activity.getValue(),
        icon: activity.getId(),
    };
};
