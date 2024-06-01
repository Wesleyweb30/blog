import { Outlet } from "react-router-dom";
import Nav from "../nav";
import { Container } from "react-bootstrap";
export default function Layout() {
  return (
    <>
        <header>
            <Nav/>
        </header>
        <main>
            <section>
                <Container >
                    <Outlet/>
                </Container>
            </section>
      </main>
    </>
  );
}
