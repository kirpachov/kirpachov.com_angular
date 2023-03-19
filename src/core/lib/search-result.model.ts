// import { BaseModel } from "./base-model";

interface SearchResultData{
  items: any[];
  metadata: any;
}

/**
 * A helper class which allows to group search results into a single object, which
 * uses search result data to generate multiple instances of specified object type.
 */
export class SearchResult<T> {
  /**
   * The list of items returned by search result
   */
  public items: T[];

  /**
   * Metadata of search result
   */
   public metadata: any|{
    current_page: number;
    per_page: number;
    prev_page: number;
    next_page: number;
    total_pages: number;
    total_count: number;
    [key: string]: any;
  };

  /**
   * Create a new instance of `SearchResult<T>`.
   * @param response Search result response from which to get data
   * @param ctor The type of constructor to use for items creation
   */
  constructor(response: SearchResultData, ctor?: new (data: any) => T) {
    if(ctor){
      this.items = response.items.map((item: T) => { return new ctor(item) } );
    } else {
      this.items = response.items;
    }

    this.metadata = response.metadata || {};
  }


  get hasItems(): boolean{
    return typeof this.items == 'object' && this.items.length > 0;
  }

  /**
   * Returns the number of current search result page.
   */
  get current_page(): number {
    return this.metadata.current_page;
  }


  /**
   * Returns the number of items per search result page.
   */
  get per_page(): number {
    return this.metadata.per_page;
  }


  /**
   * Returns the number of previous search result page.
   */
  get prev_page(): number {
    return this.metadata.prev_page;
  }


  /**
   * Returns the number of next search result page.
   */
  get next_page(): number {
    return this.metadata.next_page;
  }


  /**
   * Returns the number of total search result pages.
   */
  get total_pages(): number {
    return this.metadata.total_pages;
  }


  /**
   * Return total number of items matched by current search
   */
  get total_count(): number {
    return this.metadata.total_count;
  }


  /**
   * Returns a boolean which indicates if search result has a next page.
   */
  get has_next(): boolean {
    return this.next_page != undefined;
  }


  /**
   * Retusn a boolean which indicates if search result has a previous page.
   */
  get has_prev(): boolean {
    return this.prev_page != undefined;
  }

  get isEmpty(): boolean{
    return !(this.items && this.items.length > 0);
  }
}
