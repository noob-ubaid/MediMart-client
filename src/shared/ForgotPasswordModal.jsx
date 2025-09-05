import React, { Fragment } from "react";
import {
  Description,
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const ForgotPasswordModal = ({ isModalOpen, close }) => {
  const {resetPassword} = useAuth()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleResetPassword = data => {
    resetPassword(data.email)
    .then(result => {
      toast.success("Check your email")
      console.log(result)
    })
    .catch(error => console.log(error))
  }
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        {/* Background Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-900"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-xl relative bg-gray-900 p-6 shadow-lg">
                <div className="">
                  <p className="text-2xl font-primary mt-2 text-center text-white font-medium border-b border-gray-700 pb-4">
                    Enter your email
                  </p>
                  <form onSubmit={handleSubmit(handleResetPassword)}>
                    <input
                      {...register("email", { required: "Email is required" })}
                      type="email"
                      className="input font-secondary border text-white border-gray-700  rounded mt-3 p-1.5 outline-none w-full mb-2"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 font-secondary w-full text-sm my-1">
                        {errors.email.message}
                      </p>
                    )}
                    <button className="bg-primary cursor-pointer py-2 w-full font-primary rounded font-medium text-white mt-1">
                      Submit
                    </button>
                  </form>
                </div>

                <div className="mt-6">
                  <div
                    onClick={close}
                    className="bg-gray-800 absolute cursor-pointer top-3 right-3 hover:bg-gray-700 duration-300 p-2 rounded-full"
                  >
                    <IoMdClose className=" " size={24} color="white" />
                  </div>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ForgotPasswordModal;
