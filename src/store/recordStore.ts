import clone from '@/lib/clone';

let data = [] as RecordItem[];

const recordStore = {
  recordList: data,
  fetchRecords() {
    data = JSON.parse(window.localStorage.getItem('#') || '[]') as RecordItem[];
    return data;
  },
  saveRecords() {
    window.localStorage.setItem('#', JSON.stringify(data));
  },
  createRecord: (record: RecordItem) => {
    const recordClone: RecordItem = clone(record);
    data.push(recordClone);
    recordStore.saveRecords();
  }
};

recordStore.fetchRecords();

export default recordStore;