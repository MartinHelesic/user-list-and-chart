import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUsers } from "../features/userSlice";
import { UserStatus } from "../enums/userStatus";

function UserList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === UserStatus.LOADING) {
    return <CircularProgress />;
  }

  const handleUserClick = (userId: number) => {
    setSelectedUserId((prevUserId) => (prevUserId === userId ? null : userId));
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <>
      <Typography variant="h2">User list:</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} disablePadding>
            <ButtonBase onClick={() => handleUserClick(user.id)}>
              <ListItemText primary={user.name} secondary={user.email} />
            </ButtonBase>
          </ListItem>
        ))}
      </List>

      <Typography variant="h2">User Address:</Typography>
      {selectedUser ? (
        <Typography sx={{ marginBottom: "25px" }}>
          <strong>Address of: </strong>
          {selectedUser.name}
          <br />
          {selectedUser.address.street},{selectedUser.address.suite},
          {selectedUser.address.city},{selectedUser.address.zipcode}
        </Typography>
      ) : (
        <Typography sx={{ marginBottom: "25px" }}>Select a User...</Typography>
      )}
    </>
  );
}

export default UserList;
