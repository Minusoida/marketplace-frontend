import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyCollectionPage } from './my-collection.page';

describe('MyCollectionPage', () => {
  let component: MyCollectionPage;
  let fixture: ComponentFixture<MyCollectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
