import { Subject,Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface BroadcastEvent {
  key: any;
  data?: any;
}

export const subjectObj = new Subject<any>();

export const broadcaster = {
  broadcast(key: any, data?: any) {
    subjectObj.next({ key, data });
  },
  on<T>(key: any): Observable<T> {
    return subjectObj.asObservable()
      .pipe(
        filter(event => event.key === key),
        map(event => <T>event.data)
      )
  },
  unsubscribe(key:string){
    return subjectObj.asObservable()
      .pipe(
        filter(event => event.key !== key)
      )
  }
}