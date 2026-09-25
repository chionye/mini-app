/** @format */

import { Link } from "react-router-dom";
import { FormInput } from "../../components/ui/FormInput";
import { Buttons } from "../../components/ui/Buttons";
import { useState } from "react";

//api - application programming interface
//consume the api
//fetch
//axios

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    //the point when data is sent to backend via API
    console.log(
      `emails is ${email} and password is ${password} and name is ${name}`,
    );
  };

  return (
    <div className='bg-white shadow px-5 py-10 lg:w-2/5 mx-auto rounded-lg'>
      <div className='text-start my-2'>
        <h2 className='text-2xl font-bold'>Register Here</h2>
      </div>
      <div className='w-full gap-4 flex flex-col'>
        <FormInput
          label='Name'
          type='text'
          name='name'
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex justify-end'>
          <Link to='/'>Already have an account? Login</Link>
        </div>
        <Buttons.solid
          onClick={handleSubmit}
          color='bg-blue-400'
          hover='bg-blue-600'>
          Register
        </Buttons.solid>
      </div>
    </div>
  );
};
