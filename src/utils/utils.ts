import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)

export const checkDay = (date: dayjs.Dayjs) => {
  if (date.isToday()) {
    return 'Сегодня'
  }

  if (date.isTomorrow()) {
    return 'Затвра'
  }

  if (date.isYesterday()) {
    return 'Вчера'
  }

  return date.format('dd, DD MMMM')
}