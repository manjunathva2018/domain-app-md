import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreaterComponent } from './content-creater.component';

describe('ContentCreaterComponent', () => {
  let component: ContentCreaterComponent;
  let fixture: ComponentFixture<ContentCreaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCreaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
