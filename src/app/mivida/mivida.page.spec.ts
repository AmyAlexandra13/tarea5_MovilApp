import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MividaPage } from './mivida.page';

describe('MividaPage', () => {
  let component: MividaPage;
  let fixture: ComponentFixture<MividaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MividaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
