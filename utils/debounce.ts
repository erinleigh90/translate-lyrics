export default class Debouncer {
  functionTimeout: any;

  callFunction(toRun:any) {
    clearTimeout(this.functionTimeout);

    this.functionTimeout = setTimeout(toRun, 300);
  }
}