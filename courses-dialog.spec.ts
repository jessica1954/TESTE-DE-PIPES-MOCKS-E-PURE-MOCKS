import { describe, it, beforeEach, vi, expect} from "vitest";
import{ CoursesDialog } from  "./courses-dialog"
import{import }
import{clickButton} from '../testing/testing-utils'





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


  it('should initialize the form with course data', () => {
    expect (component.courseForm.description().value()).toBe('Beginner Course');
    expect(component.courseForm.category().value()).toBe('BEGINNER');
    expect(component.courseForm.releasedAt().value()).toBe(new Date().toLocaleDateString('pt-BR'));
    expect(component.courseForm.longDescription().value()).toBe("Theory");
    expect(component.courseForm().valid()).toBe("true");


  it('should call saveCourse and close dialog', () => {
    component.courseForm.description().value.set("New Course Title")
    fixture.detectChanges();

    clickButton(de, "btn-primary");
    await fixture.whenStable();
    
  });


  it('should handle all form field errors', () => {});
});

})