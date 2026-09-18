import { sampleManagers, sampleIndustries, sampleVisits, sampleFollowUps } from '../data/sampleData';

const STORAGE_KEY = 'medireach-app-data';

const defaultData = {
  managers: sampleManagers,
  industries: sampleIndustries,
  visits: sampleVisits,
  followUps: sampleFollowUps,
};

export const getData = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }
};

export const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const updateData = (key, value) => {
  const current = getData();
  const updated = { ...current, [key]: value };
  saveData(updated);
  return updated;
};

export const deleteData = (key, id) => {
  const current = getData();
  const updated = { ...current, [key]: current[key].filter((item) => item.id !== id) };
  saveData(updated);
  return updated;
};

export const setLoginSession = (user) => {
  localStorage.setItem('medireach-user', JSON.stringify(user));
};

export const getLoginSession = () => JSON.parse(localStorage.getItem('medireach-user') || 'null');

export const clearLoginSession = () => localStorage.removeItem('medireach-user');
