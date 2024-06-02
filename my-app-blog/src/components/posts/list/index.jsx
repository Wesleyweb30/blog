import { useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import PostCard from "../card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import PostForm from "../form/save";


export default function PostsList() {

    const POSTS_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);


    const {data, isIdle, isLoading, isError, error } = useQuery({
        queryKey: ['postsData', currentPage],
        queryFn: () =>
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    const start = (currentPage - 1) * POSTS_PAGE;
                    const end = start + POSTS_PAGE;
                    return response.data.slice(start, end)
                })
    });

    console.log(data)
    if (isIdle || isLoading) return 'Loading...';
    if (isError) return 'An error has occurred: ' + error.message;
    const totalPages = Math.ceil(100 / POSTS_PAGE);  

    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex justify-content-end">
                    <PostForm/>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={3} xl={3} xxl={3}>
                {data.map(post => (
                    <Col key={post.id}>
                        <PostCard postId={post.id} user={post.UserId} title={post.title} body={post.body}/>
                    </Col>
                ))}
            </Row>
            
            <Row>
                <Pagination className="d-flex justify-content-center">
                    <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                    {Array.from({ length: totalPages }, (_, idx) => (
                        <Pagination.Item
                            key={idx + 1}
                            active={idx + 1 === currentPage}
                            onClick={() => setCurrentPage(idx + 1)}
                        >
                            {idx + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                </Pagination>
            </Row>

        </>
    );
}
