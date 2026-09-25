/** @format */

import { useEffect, useState } from "react";
import { Buttons } from "../components/ui/Buttons";
import { FormInput } from "../components/ui/FormInput";
import type { PostData } from "../types";
import { fetchPostData } from "../service/api/query";

export const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

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

  return (
    <div className='flex flex-col gap-4 w-full'>
      {posts.map((post: PostData) => (
        <div className='flex justify-between items-center gap-2' key={post.id}>
          <FormInput
            label=''
            type='text'
            name='name'
            id='name'
            value={post.title}
            onChange={() => {}}
          />
          <div className='flex gap-2 items-center'>
            <Buttons.solid
              color='bg-blue-400'
              hover='bg-blue-500'
              onClick={() => {}}>
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
      ))}
    </div>
  );
};
