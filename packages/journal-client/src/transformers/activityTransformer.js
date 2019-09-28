export const mapActivityToOption = activity => ({
  label: activity.name,
  name: activity.id,
  icon: activity.icon,
});

export const mapOptionToActivity = option => ({
  name: option.label,
  id: option.name,
  icon: option.icon,
});


