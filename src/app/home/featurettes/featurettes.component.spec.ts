import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturettesComponent } from './featurettes.component';

describe('FeaturettesComponent', () => {
  let component: FeaturettesComponent;
  let fixture: ComponentFixture<FeaturettesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturettesComponent]
    });
    fixture = TestBed.createComponent(FeaturettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
