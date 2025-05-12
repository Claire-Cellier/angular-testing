import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing"
import { COURSES } from "../../../../server/db-data";

describe("CourseService", () => {

    let coursesService: CoursesService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CoursesService,
                provideHttpClientTesting()
            ]
        });

        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should retrieve all courses', () => {
        coursesService.findAllCourses()
            .subscribe(courses => {
                expect(courses).toBeTruthy('No courses returned');
                expect(courses.length).toBe(12, 
                    "incorrect number of courses");

                const course = courses.find(course => course.id == 12);

                expect(course.titles.description).toBe(
                    "Angular Testing Course")
            });

        const req = httpTestingController.expectOne('/api/courses');

        expect(req.request.method).toEqual("GET");

        req.flush({payload: Object.values(COURSES)});

    });

    it('should find a course by id', () => {
        coursesService.findCourseById(12)
            .subscribe(courses => {
                expect(courses).toBeTruthy('No courses returned');
                expect(courses.id).toBe(12, 
                    "incorrect id number");
            });

        const req = httpTestingController.expectOne('/api/courses/12');

        expect(req.request.method).toEqual("GET");

        req.flush(COURSES[12]);

        httpTestingController.verify();
    });

    afterEach(() => {
        //to ensure that only the Http requests specified here 
        // using the expect APIs available the testing controller
        httpTestingController.verify();
    })
});