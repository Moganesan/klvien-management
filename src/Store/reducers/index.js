import { combineReducers } from "redux";
import {
  MenuReducer,
  NotificationReducer,
  ProfileModalReducer,
  FeedbackModalReducer,
  UploadModalReducer,
  ConnectGoogleModalReducer,
  LoadingReducer,
  RocketLoadingReducer,
  AlertMessageReducer,
  GreenLoadingReducer,
  UpdateStudentDetailsReducer,
} from "./uiReducer";
import {
  AthenticateUser,
  setUser,
  VerifyUser,
  Logout,
  GoogleAuth,
  ConnectGoogle,
} from "../reducers/userReducer";
import {
  get_attendance,
  getAssignment,
  getExams,
  serverReducer,
  getHolidays,
  getClasses,
  getBillings,
  addFeedback,
  get_subjects,
  get_students,
  UpdateStudent,
  CreateStudent,
  CreateAssignment,
  CreateExam,
  CreateClass,
  UpdateClass,
  AddAttendance,
  CreateSubject,
  UpdateAssignmentStatus,
  UpdateExamStatus,
  GetLatestLogins,
} from "../reducers/serverReducer";

const reducers = combineReducers({
  Menu: MenuReducer,
  NotificationModal: NotificationReducer,
  ProfileModal: ProfileModalReducer,
  FeedbackModal: FeedbackModalReducer,
  UploadModal: UploadModalReducer,
  Authentication: AthenticateUser,
  GoogleAuth: GoogleAuth,
  GoogleConnectModal: ConnectGoogleModalReducer,
  UpdateStudentDetailsModal: UpdateStudentDetailsReducer,
  ConnectGoogle: ConnectGoogle,
  SetUser: setUser,
  Loading: LoadingReducer,
  RocketLoading: RocketLoadingReducer,
  GreenLoading: GreenLoadingReducer,
  Verify: VerifyUser,
  Logout: Logout,
  AlertMessage: AlertMessageReducer,
  GetStudents: get_students,
  CreateStudent: CreateStudent,
  UpdateStudent: UpdateStudent,
  GetSubjects: get_subjects,
  GetAttendance: get_attendance,
  GetAssignments: getAssignment,
  CreateAssignment: CreateAssignment,
  GetExams: getExams,
  CreateExam: CreateExam,
  CreateClass: CreateClass,
  CreateSubject: CreateSubject,
  UpdateAssignmentStatus: UpdateAssignmentStatus,
  UpdateExamStatus: UpdateExamStatus,
  UpdateClass: UpdateClass,
  GetLatestLogins: GetLatestLogins,
  GetHolidays: getHolidays,
  GetBillings: getBillings,
  GetClasses: getClasses,
  AddAttendance: AddAttendance,
  AddFeedBack: addFeedback,
  Server: serverReducer,
});

export default reducers;