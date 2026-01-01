import { DateTime } from 'luxon';

export const UA_ZONE = 'Europe/Kyiv';

export const UA_DATE_FORMAT = 'dd.MM.yyyy';

export const nowUA = () => DateTime.now().setZone(UA_ZONE);

export const fromISO = (iso) => DateTime.fromISO(iso, { zone: UA_ZONE});

export const formatDate = (iso, format = UA_DATE_FORMAT) => fromISO(iso).toFormat(format);

export const isNowInRange = (startDate, endDate) => {
  if (!startDate || !endDate) return false;

  const now = nowUA();
  const start = fromISO(startDate).startOf('day');
  const end = fromISO(endDate).endOf('day');

  return now >= start && now <= end;
};