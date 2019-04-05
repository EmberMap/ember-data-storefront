export default class RecordArrayQuery {

  constructor(store, type, params = {}) {
    this.store = store;
    this.type = type;
    this.params = params;

    this.value = null;
  }

  run() {
    let promise;

    if (this.value) {
      promise = this.value.update();

    } else {
      promise = this.store.query(this.type, this.params)
        .then(records => {
          this.value = records;

          return records;
        });
    }

    return promise;
  }

}
