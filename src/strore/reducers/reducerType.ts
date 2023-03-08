export interface initStateUserType {
  loginForm?: any;
  error: null;
  message: string;
  getUserInfo: any;
  loading: boolean;
  userState: any;
  userRoleAssignForm: {
    isChange: Date;
    formJson: any;
  };
}
export interface actionTsType {
  type: string;
  payload?: any;
}
