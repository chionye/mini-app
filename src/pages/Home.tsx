/** @format */

import { useEffect, useState } from "react";
import { Buttons } from "../components/ui/Buttons";
import { FormInput } from "../components/ui/FormInput";
import type { PostData } from "../types";
import { fetchPostData } from "../service/api/query";
import { updatePostData } from "../service/api/mutation";

//methods - GET, POST, PUT, PATCH AND DELETE

//client -> sends request -> server(backend) -> sends response -> client
//mounts -> loads
//useEffect -> allows us to run functions when the component in question mounts

export const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([]); //keep the current state of a particular data

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

  return (
    <div className='flex flex-col gap-4 w-full'>
      {posts.map((post: PostData) => {
        return (
          <div className='flex justify-between items-end gap-2' key={post.id}>
            <div className='flex gap-2 items-center justify-center w-full'>
              <FormInput
                label='title'
                type='text'
                name='title'
                id='title'
                value={post.title}
                onChange={(e) =>
                  handleUpdateForm(post.id, "title", e.target.value)
                }
              />
              <FormInput
                label='body'
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
                textColor='bg-red-400'>
                Delete
              </Buttons.outline>
            </div>
          </div>
        );
      })}
    </div>
  );
};
