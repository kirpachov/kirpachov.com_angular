import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
// import { FileData } from '@core/lib/attachments/file-data';
// import { SearchResult } from '@core/lib/search-result.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import { ConfigService } from '../config.service';
import { DomainService } from '../domain.service';
import { ConfigsService } from '../configs.service';
import { SearchResult } from 'src/core/lib/search-result.model';
// import { NotificationService } from '../notification.service';
// import { DomainService } from './domain.service';

@Injectable({
  providedIn: 'root'
})
export abstract class CommonHttpService<T> extends DomainService {

  protected itemName?: string;
  protected type?: new (...args: any) => T;
  protected paramsToDelete: string[] = [];

  itemLoad: EventEmitter<T> = new EventEmitter<T>();

  // @Inject(HttpClient) http!: HttpClient;

  constructor(
    public http: HttpClient,
    config: ConfigsService
  ) {
    super(config)
  }

  get(id: number, params = {}): Observable<T> {
    if (id == undefined) throw new Error(`Invalid id has been passed to service.get(${id})`);
    // TODO USE REGEXP TO VALIDATE URL
    return this.http.get(`${this.getBaseUrl()}/${id}`, { params: params }).pipe(
      map((data: any) => {
        let newValue: T = this.type ? new this.type(data) : data;
        if (newValue && this.type) this.itemLoad.emit(newValue);
        return newValue;
      })
    );
  }

  search(params: any = { per_page: 10, page: 1 }): Observable<SearchResult<T>> {
    return this.http.get(`${this.getBaseUrl()}`, { params: params }).pipe(
      map((data: any) => new SearchResult<T>(data, this.type)),
    );
  }

  /**
   * 
   * @param params simple json
   * @returns Observable: Server's response
   */
  create(params: any): Observable<T> {
    if (!this.itemName) console.error("[CommonHttp.create()] Invalid Item name!", this);

    var p: any = {};
    this.itemName ? p[this.itemName] = params : p = params;

    return this.http.post(`${this.getBaseUrl()}`, p).pipe(
      map((data: any) => {
        return this.type ? new this.type(data) : data;
      })
    )
  }

  createMultiple(params: any[]): Observable<any | any[]> {
    if (!(this.itemName)) console.error("CommonHttpService.createMultiple() - invalid `this.itemName` value!", this.itemName);

    var p: any = {};
    this.itemName ? p[this.itemName] = [...params] : p["items"] = [...params];

    return this.http.post(`${this.getBaseUrl()}`, p);
  }

  createDefault(params: any = {}): Observable<T> {
    var p: any = {};
    this.itemName ? p[this.itemName] = params : p = params;
    p["defaults"] = true;

    return this.http.post(`${this.getBaseUrl()}`, p).pipe(
      map((data: any) => {
        return this.type ? new this.type(data) : data;
      })
    );
  }

  /**
   * 
   * @param id
   * @param params simple json
   * @returns Observable: Server's response
   */
  update(id: number, params: any): Observable<T> {
    if (!this.itemName) console.error("[CommonHttp.update()] Invalid Item name!", this);

    return this.http.patch(`${this.getBaseUrl()}${id}`, this.parseUpdateParams(params)).pipe(
      map((data: any) => {
        const newValue: T = this.type ? new this.type(data) : data;
        if (newValue && this.type) this.itemLoad.emit(newValue);
        return newValue;
      })
    )
  }

  /**
   * @param id ID of the element you want to delete.
   */
  delete(id: number): Observable<any> {
    if (!(id && typeof id == 'number')) throw new Error(`Invalid id has been passed to service.delete(${id})`);

    return this.http.delete<any>(this.getUrl(id));
    return this.http.delete<any>(`${this.getBaseUrl()}${id}`);
  }

  protected parseUpdateParams(params: any): any {
    var p: any = {};

    let json: any = {};
    if (this.paramsToDelete && this.paramsToDelete.length > 0) {
      Object.keys(params).forEach((key: string) => {
        if (this.paramsToDelete.indexOf(key) == -1) {
          json[key] = params[key];
        }
      })
    } else {
      json = params;
    }

    if (this.itemName)
      p[this.itemName] = json
    else
      p = json;

    return p;
  }

  protected mapItem(data: any): T | any {
    return this.type ? new this.type(data) : data;
  }

  protected mapItems(data: any[]): T[] | any[] {
    return data.map((item: any) => this.mapItem(item));
  }
}
