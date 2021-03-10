export function AutoUnsubscribe(subName: string = 'sub') {
  return (constructor: any) => {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      const sub = this[subName];

      sub?.unsubscribe();
      
      if (original && (typeof original === 'function')) {
        original.apply(this, arguments);
      }
    };
  };
}
