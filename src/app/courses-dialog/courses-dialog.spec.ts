import { beforeEach, describe, it, vi } from 'vitest';
import { Course } from '../model/course';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CoursesDialog } from './courses-dialog';
import { MOCK_COURSES } from '../testing/testing-data';
import { CoursesService } from '../services/courses.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

describe('CoursesDialog', () => {
  let component: CoursesDialog;
  let fixture: ComponentFixture<CoursesDialog>;
  let de: DebugElement;
  let mockCoursesService: any;
  let mockDialogRef: any;

  beforeEach(async () => {
    mockCoursesService = {
      saveCourse: vi.fn().mockResolvedValue({}),
    };
    mockDialogRef = {
      close: vi.fn(),
    };
  });

  await TestBed.configureTestingModule({
    imports: [CoursesDialog],
    providers: [
      { provide: CoursesService, useValue: mockCoursesService },
      { provide: DialogRef, useValue: mockDialogRef },
      { provide: DIALOG_DATA, useValue: { course: MOCK_COURSES[0] } },
    ],
  }).compileComponents();

  fixture = TestBed.createComponent(CoursesDialog);
  de = fixture.debugElement;
  component = fixture.componentInstance;
  fixture.detectChanges();

  it('should initialize the form with course data', () => {});

  it('should call saveCourse and close dialog', () => {});

  it('should handle all form field errors', () => {});
});
