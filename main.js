import NoteBook from './NoteBook';

const samOneYearDiary = new NoteBook ({pages: 365, type: 'diary'});
samOneYearDiary.init ('Sam', "Sam's one year diary");
samOneYearDiary.addContext ({
  title: "Sam's one day",
  date: '2019-06-21',
  weather: 'rainy',
  content: 'Still have a lot of work to do 😢',
});
