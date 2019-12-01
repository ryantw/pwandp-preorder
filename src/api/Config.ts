import {
  Method,
  ResponseType,
} from 'axios';

interface Config {
  url: string;
  method?: Method;
  responseType?: ResponseType;
  headers?: any;
  params?: any;
  data?: any;
}

export {
  Config,
};
