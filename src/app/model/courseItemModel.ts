export interface CourseItem {
  img? : string;
  investor? :string;
  name?: string;
  price: string;
  status: string;
  time: string;
  totalReview?: string;
  totalStar: number;
  id: string;
  videoInfo: VideoInfo;
  video: string;
  lessonContent: LessonContent;
  userId: string[];
}

export interface VideoInfo {
  creater?: string;
  duration?: string;
  language?: string;
  previewImg?: string;
  uploadDate?: string|Date;
}

export interface LessonContent {
  title?: string;
  detail?: string;
  lessons: Lesson[];
}

export interface Lesson {
  detail?: string;
  title?: string;
}

export interface Rate {
  comment: string;
  starReview: number;
}
