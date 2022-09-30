type SUCCESS = 200;
type ERROR = 500;

export type Result = {
  status: ERROR | SUCCESS;
  data?: any;
  message: string;
};