import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { useMutation} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// Validação com Yup
const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    body: yup.string().required("Body is required"),
});


export default function PostForm() {
    const [show, setShow] = useState(false);
    /**Hooks Form */
    const { register,
         handleSubmit,
        formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    /**Hooks Mutation */
    const mutation = useMutation({
        mutationFn: (data) =>{
            axios.post("https://jsonplaceholder.typicode.com/posts", {
                title : data.title,
                body: data.body,
                userId: 1
            })
        }
    })
   
    const onSubmit = data => {
       mutation.mutate(data, {
        onSuccess:() =>{
            console.log("Success"),
            reset();
        },
        onError:(error) =>{
            console.error(error);
        }
       })
    }

    const handleShow = () => {
        setShow(!show);
        reset();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Post
            </Button>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group controlId="formPostTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                {...register("title")}
                                isInvalid={errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPostBody" className="mt-3">
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter body"
                                {...register("body")}
                                isInvalid={errors.body}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.body?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShow}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={mutation.isLoading}>
                             {mutation.isLoading ? 'Saving...' : 'Save'} 
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
