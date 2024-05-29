import React from 'react';
import Nav from "../../components/nav";
import { Container, Col, Row } from "react-bootstrap";
import PostCard from "../../components/posts/card";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'; // Importando Axios

export default function HomePage() {
  const { isIdle, isLoading, isError, data, error } = useQuery({
    queryKey: ['postsData'],
    queryFn: () =>
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data.slice(0, 12))
  });

  console.log(data)
  if (isIdle || isLoading) return 'Loading...';
  if (isError) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Nav />
      <main>
        <section>
          <Container >
            <Row xs={1} md={2} lg={3} xl={3} xxl={3}> {/* Definindo quantas colunas em cada breakpoint */}
              {data.map(post => (
                <Col key={post.id}>
                  <PostCard title={post.title} user={post.UserId} body={post.body} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
