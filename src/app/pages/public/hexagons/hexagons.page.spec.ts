import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HexagonsPage } from './hexagons.page';

describe('HexagonsPage', () => {
  let component: HexagonsPage;
  let fixture: ComponentFixture<HexagonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexagonsPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
