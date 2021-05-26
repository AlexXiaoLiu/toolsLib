import { Subject,Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const broadcaster = {
  subjectObj:new Subject<any>(),
  broadcast(key: any, data?: any) {
    this.subjectObj.next({ key, data });
  },
  on(key: any): Observable<any> {
    return this.subjectObj.asObservable()
      .pipe(
        filter(event => event.key === key),
        map(event => event.data)
      )
  }
}