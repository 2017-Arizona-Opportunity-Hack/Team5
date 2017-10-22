export class JsonResponse {
  constructor(d = { success: false, data: null, message: null }) {
    this._success = d.success;
    this._data = d.data;
    this._message = d.message;
  }

  get success() { return this._success; }
  get data() { return this._data; }
  get message() { return this._message; }

  toJSON() {
    return {
      success: this.success,
      data: this.data,
      message: this.message
    }
  }
}
