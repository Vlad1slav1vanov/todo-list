import dayjs from "dayjs";
export interface IRepeat {
  name: string;
  dates: dayjs.Dayjs[];
}


export interface ITodo {
  id: number | null;
  title: string;
  term?: dayjs.Dayjs | null;
  reminder?: dayjs.Dayjs | null;
  repeat?: IRepeat;
  favorites: boolean;
  complete: boolean;
}

