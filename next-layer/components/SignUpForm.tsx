import React from "react";

function SignUpForm() {
  return (
    <div className="h-screen min-h-screen bg-white ">
        <form className="flex flex-col justify-start text-black gap-y-3 px-10 pt-20">
          <div className="mx-10 text-black text-2xl pb-2 text-left font-medium">Sign up with email</div>
            <input className="border-[1.5px] mx-10 min-h-12 border-black rounded-xl text-black text-base px-4" type="text" name="name" placeholder="E-mail"/>
            <input className="border-[1.5px] mx-10 min-h-12 border-black rounded-xl text-black text-base px-4" type="text" name="name" placeholder="Password"/>
            <input className="border-[1.5px] mx-10 min-h-12 border-black rounded-xl text-black text-base px-4" type="text" name="name" placeholder="Confirm password"/>
            <button className="text-blue-600 text-sm mx-10 -mt-2 text-right font-medium">Forgot your password?</button>
            <input className="bg-blue-600 mx-10 min-h-12 rounded-xl text-white text-base px-4" type="submit" value="Sign up" />
        </form>
      </div>
  );
}

export default SignUpForm;
