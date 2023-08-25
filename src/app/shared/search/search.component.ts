import {
  Component,
  ElementRef,
  ViewChild,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { searchCharacter } from 'src/app/core/store/actions/search.action';
import { selectSearchCharacter } from 'src/app/core/store/selectors/search.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('input') input: ElementRef | undefined;

  store = inject(Store);

  public change() {
    if (this.input) {
      const value = this.input.nativeElement.value;
      this.store.dispatch(searchCharacter({ value }));
    }
  }
}
