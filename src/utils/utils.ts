import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';


dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const dateNow = dayjs().format('YYYY-MM-DD');

// Возвращает день в формате Сегодня/Вчера/Завтра

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

// Принимает дату и возвращает булево зн. была ли эта дата до сегодня

export const checkTerm = (date: dayjs.Dayjs) => {
  return date.isBefore(dateNow, 'day')
}