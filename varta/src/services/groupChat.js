import api from "./api";

const createGroup = (groupName) => {
  return api.post("/chats/groups/create", { name: groupName }).then(
    (res) => {
      console.log(res.data);
      console.log(res.headers);
      return res;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );
};

const GroupChatServices = { createGroup };

export default GroupChatServices;
