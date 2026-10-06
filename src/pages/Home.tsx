/** @format */

import { useEffect, useState } from "react";
import { Buttons } from "../components/ui/Buttons";
import { FormInput } from "../components/ui/FormInput";
import type { PostData, UpdatePostDataProp } from "../types";
import { fetchPostData } from "../service/api/query";
import {
  updatePostData,
  deletePost,
  createPost,
} from "../service/api/mutation";
import { Modal } from "../components/ui/Modal";

//methods - GET, POST, PUT, PATCH AND DELETE

//client -> sends request -> server(backend) -> sends response -> client
//mounts -> loads
//useEffect -> allows us to run functions when the component in question mounts

export const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([]); //keep the current state of a particular data
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    //fetch posts
    fetchPostData()
      .then((data) => {
        setPosts(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUpdateForm = (id: number, name: string, value: string) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, [name]: value };
        }
        return post;
      });
    });
  };

  const handleEdit = (id: number) => {
    const title = posts.find((post) => post.id === id)?.title;
    const body = posts.find((post) => post.id === id)?.body;
    const payload = {
      title,
      body,
    };
    updatePostData({ id, data: payload })
      .then(() => {
        console.log("Post updated");
      })
      .catch((err) => {
        console.error("Error updating post", err);
      });
  };

  const handleDelete = (id: number) => {
    deletePost(id)
      .then(() => {
        setPosts((prevPosts) => {
          return prevPosts.filter((post) => post.id !== id);
        });
        console.log("Post deleted");
      })
      .catch((err) => {
        console.error("Error deleting post", err);
      });
  };

  const handleSubmit = () => {
    const payload: UpdatePostDataProp = {
      title,
      body,
      userId,
    };
    createPost(payload)
      .then(() => {
        console.log("Post created");
      })
      .catch((err) => {
        console.error("Error creating post", err);
      });
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <Buttons.solid
        color='bg-blue-400'
        hover='bg-blue-500'
        onClick={() => setIsModalOpen(true)}>
        New Post
      </Buttons.solid>
      {posts.map((post: PostData) => {
        return (
          <div className='flex justify-between items-end gap-2' key={post.id}>
            <div className='flex gap-2 items-center justify-center w-full'>
              <FormInput
                label={`title-${post.id}`}
                type='text'
                name='title'
                id='title'
                value={post.title}
                onChange={(e) =>
                  handleUpdateForm(post.id, "title", e.target.value)
                }
              />
              <FormInput
                label={`body-${post.id}`}
                type='text'
                name='body'
                id='body'
                value={post.body}
                onChange={(e) =>
                  handleUpdateForm(post.id, "body", e.target.value)
                }
              />
            </div>
            <div className='flex gap-2 items-center'>
              <Buttons.solid
                color='bg-blue-400'
                hover='bg-blue-500'
                onClick={() => handleEdit(post.id)}>
                Edit
              </Buttons.solid>
              <Buttons.outline
                color='bg-red-400'
                hover='bg-red-500'
                textColor='bg-red-400'
                onClick={() => handleDelete(post.id)}>
                Delete
              </Buttons.outline>
            </div>
          </div>
        );
      })}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className='flex flex-col gap-2 items-center justify-center w-full'>
            <FormInput
              label={`title`}
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormInput
              label={`body`}
              type='text'
              name='body'
              id='body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <FormInput
              label={`userId`}
              type='number'
              name='userId'
              id='userId'
              value={userId.toString()}
              onChange={(e) => setUserId(Number(e.target.value))}
            />
            <Buttons.solid
              color='bg-blue-400'
              hover='bg-blue-500'
              onClick={handleSubmit}>
              Submit
            </Buttons.solid>
          </div>
        </Modal>
      )}
    </div>
  );
};
