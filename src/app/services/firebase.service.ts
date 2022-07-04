import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CourseItem } from '../model/courseItemModel';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public firestore: AngularFirestore) {}

  getCourse(): Observable<any> {
    const courseCollection = this.firestore.collection('courses');
    return courseCollection.valueChanges({idField: 'id'});
  }

  getCourseDetail(id: string): Observable<any> {
    const courseCollection = this.firestore.doc(`courses/${id}`);
    return courseCollection.valueChanges({idField: 'id'});
  }

  getEmployee(): Observable<any> {
    const employeeCollection = this.firestore.collection('employee');
    return employeeCollection.valueChanges();
  }

  setCourse() {
    const courseCollection = this.firestore.collection('courses');
    courseCollection.add({
      img: "https://media.istockphoto.com/vectors/english-vector-id1047570732",
      investor: "Cloud Academy",
      name:"Unconscious Bias ",
      price: "0.254",
      status: "Popular",
      time: "50",
      totalReview: "23,245",
      totalStar: 5,
      userId: ["pvZ4KJp9ULSDlvVmRIhWcj8OCM12"],
      lessonContent: {
        detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
        lessons: [
          {
            detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
            title:"Lesson Title"
          },
          {
            detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
            title:"Lesson Title"
          },
          {
            detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
            title:"Lesson Title"
          },
          {
            detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
            title:"Lesson Title"
          },
          {
            detail :"Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident sit autem perferendis et error.",
            title:"Lesson Title"
          }
        ],
      },
      video: "https://vjs.zencdn.net/v/oceans.mp4",
      videoInfo: {
        creater: " Reena Jacob",
        duration: "50mins",
        language: "English",
        uploadDate: "1670086800",
      }
    });
  }
  setEmployee() {
    const courseCollection = this.firestore.collection('employee');
    courseCollection.add({
      avatar: 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-illustration-teacher-avatar-png-image_5773625.jpg',
      name: 'Robert James',
      role: 'UI/UX Designer',
      course: '56 Course',
      rate: '4.9',
      totalRate: '76.335',
    });
  }
}
