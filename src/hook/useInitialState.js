import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { get } from "../api";

function useInitialState() {
  const { setUsers, setComments } = useContext(Context);
  
  const getApi = async () => {
    try {
      const { data: comments } = await get("/comment");
      const { data: users } = await get("/user");
      setComments(comments.data);
      setUsers(users.data);
    } catch (err) {
      console.error("err getApi useTransaction", err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
}

export default useInitialState;
