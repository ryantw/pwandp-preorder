interface Message {
  id?: string;
  message: string;
  type: 0|1|2|3; // 0: success, 1: info, 2: warning, 3: error
}

export {
  Message,
};
