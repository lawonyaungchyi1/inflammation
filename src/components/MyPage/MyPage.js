import nyanlin from "./../nyanlin.png";
import { Container, MessageBox } from "./MyPage-style";
import { Button } from "@mui/material";
import { useState } from "react";
import Header from "./../Header";
import Form from "./../Form";

const MyPage = () => {
  const [click, setClick] = useState(false);
  const [muted, setMuted] = useState("true");

  const showQuestions = () => {
    setClick(!click);
    setMuted(!muted);
  };
  return (
    <>
      {click ? (
        <>
          <Header />
          <Form />
        </>
      ) : (
        <div style={Container}>
          <div>
            <Button variant="contained" color="error" onClick={showQuestions}>
              မေးခွန်းကြည့်ကြရအောင်
            </Button>
          </div>
          <MessageBox>Just to stay near you!</MessageBox>
        </div>
      )}
    </>
  );
};

export default MyPage;
