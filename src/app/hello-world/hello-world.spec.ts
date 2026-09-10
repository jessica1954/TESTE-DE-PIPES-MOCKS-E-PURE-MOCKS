import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HelloWorld } from './hello-world';
import { describe, it, expect, beforeEach } from 'vitest';

describe('HelloWorld', () => {
  let fixture: ComponentFixture<HelloWorld>;
  let de: DebugElement;
  let el: HTMLElement;
  let component: HelloWorld;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorld],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloWorld);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('should display the message', () => {
    const h1 = el.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toEqual(component.message);
  });
});
