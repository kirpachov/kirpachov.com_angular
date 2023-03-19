import { Subject, takeUntil } from "rxjs";
import { AutoDestroy } from "./autodestroy";

export class WithSubscriptions {
  @AutoDestroy destroy$: Subject<void> = new Subject<void>();
}