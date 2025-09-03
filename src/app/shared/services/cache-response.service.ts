import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export abstract class CacheResponseService {
  private cache = new Map<string, any>();

  private createCacheKey(key: string, filter: any): string {
    const filterStr = JSON.stringify(filter, Object.keys(filter).sort());
    return `${key}:${filterStr}`;
  }

  private getCachedResponse<T>(key: string, filter: any): T | undefined {
    const cacheKey = this.createCacheKey(key, filter);
    return this.cache.get(cacheKey);
  }

  private fetchAndCache<T>(key: string, filter: any, fetchFn: () => Observable<T>): Observable<T> {
    const cacheKey = this.createCacheKey(key, filter);
    return fetchFn().pipe(tap((response) => this.cache.set(cacheKey, response)));
  }

  public getWithCache<T>(key: string, filter: any, fetchFn: () => Observable<T>): Observable<T> {
    const cachedResponse = this.getCachedResponse<T>(key, filter);
    return cachedResponse
      ? of(cachedResponse).pipe(delay(100))
      : this.fetchAndCache<T>(key, filter, fetchFn);
  }

  public clearCache(key?: string, filter?: any): void {
    if (key && filter !== undefined) {
      const cacheKey = this.createCacheKey(key, filter);
      this.cache.delete(cacheKey);
    } else if (key) {
      const keysToDelete = Array.from(this.cache.keys()).filter((cacheKey) =>
        cacheKey.startsWith(`${key}:`),
      );
      keysToDelete.forEach((cacheKey) => this.cache.delete(cacheKey));
    } else {
      this.cache.clear();
    }
  }
}
