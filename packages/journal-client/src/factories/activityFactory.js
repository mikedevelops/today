import Activity from '../entities/Activity';

export default (type, name, icon, value = null, label = null) =>
    new Activity(icon, type, name, value, label);
