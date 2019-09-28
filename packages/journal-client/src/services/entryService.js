import moment from 'moment';
import entryFactory from '../factories/entryFactory';
import activityFactory from '../factories/activiryFactory';

export const handleSaveEntryResponse = data => {
  return entryFactory(
    data.content,
    moment(data.createdAt),
    data.id,
    data.activities.map(activity => activityFactory(
      activity.type,
      activity.icon,
      activity.name,
      activity.id,
    )),
  );
};
