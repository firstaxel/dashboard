import { Box, Button, Container, Typography } from "@mui/material";
import { useLogin } from "@refinedev/core";
import { ThemedTitle } from "@refinedev/mui";

import { GetServerSideProps } from "next";

export default function Login() {
  const { mutate: login } = useLogin();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap="25px"
        justifyContent="center"
        flexDirection="column"
      >
        <ThemedTitle
          collapsed={false}
          wrapperStyles={{
            fontSize: "22px",
            justifyContent: "center",
          }}
        />

        <Button
          style={{ width: "240px" }}
          variant="contained"
          onClick={() => login({})}
        >
          Sign in
        </Button>
        <Typography align="center" color={"text.secondary"} fontSize="12px">
          Powered by Google
        </Typography>
      </Box>
    </Container>
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  return {
    props: {},
  };
};
