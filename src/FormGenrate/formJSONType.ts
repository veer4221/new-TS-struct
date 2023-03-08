export interface fildSizeType {
  md: string;
  xs: string;
  sm: string;
  lg: string;
}

export interface FieldType {
  initValue: String | number | boolean;
  validateField?: any;
  fieldType: string;
  label: string;
  placeholder: string;
  name: string;
  fildSize: fildSizeType;
}
export interface FormJSON_Type {
  ["form-slug"]: string;
  Fields: FieldType[];
  formName: string;
  formPosition: string;
  card: {
    style: {
      background: string;
      color: string;
    };
    shadow: string;
  };
  fieldStyle: {
    background: string;
    labelColor: string;
    color: string;
  };
  submitButton: {
    label: string;
    position: string;
    style: {
      background: string;
      color: string;
      paddingLeft: string;
      paddingRight: string;
    };
  };
  resetButton: {
    required: boolean;
    label: string;
    style: {
      background: string;
      color: string;
      paddingLeft: string;
      paddingRight: string;
    };
  };
}
