import Aside from "@/components/Aside";
import React from "react";
import styled from "styled-components";
import Forum from "./layouts/Forum";

const ForumPage = () => {
  return (
    <Layout>
      <Container>
        <Forum />
        <Aside />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export default ForumPage;
