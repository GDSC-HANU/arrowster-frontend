export type FormState = {
  gpa: number | null
  selectedCourse: string | null
  selectedGradeLevel: string | null
  selectedCountry: SelectedCountry | null
  selectedBudget: string | null
}

type SelectedCountry = {
  value: number
  label: string
}

export enum GradeLevel {
  Master = 'Master',
  Bachelor = 'Bachelor'
}

export enum TuitionFee {
  '500 - 1000$' = '500 - 1000$',
  '1001 - 5000$' = '1001 - 5000$',
  '5001 - 10000$' = '5001 - 10000$',
  '10001 - 20000$' = '10001 - 20000$',
  'More than 20000$' = 'More than 20000$'
}

export enum CourseCategory {
  'Art & Design' = 'Art & Design',
  'Business & Management' = 'Business & Management',
  'Computers & Technology' = 'Computers & Technology',
  'Criminal Justice & Legal' = 'Criminal Justice & Legal',
  'Education & Teaching' = 'Education & Teaching',
  'Liberal Arts & Humanities' = 'Liberal Arts & Humanities',
  'Nursing & Healthcare' = 'Nursing & Healthcare',
  'Psychology & Counseling' = 'Psychology & Counseling',
  'Science & Engineering' = 'Science & Engineering',
  'Trade & Careers' = 'Trade & Careers'
}

export type Location = {
  id: number
  country: string
}

export type University = {
  id: number
  name: string
  tuition_fee: TuitionFee
  course_category: CourseCategory
  location: Location
  dateline: Date
  ranking: string
}
