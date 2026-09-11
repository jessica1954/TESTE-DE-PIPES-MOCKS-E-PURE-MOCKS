import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, it, expect, vi } from 'vitest';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let de: DebugElement;
  const mockTabs: TabData[] = MOCK_TABS;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
    }).compileComponents();
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.detectChanges();
  });
});
