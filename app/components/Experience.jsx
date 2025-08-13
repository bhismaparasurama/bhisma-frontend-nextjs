import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="px-30 mt-20 max-[1000px]:px-4 scroll-mt-[100px]" id="experience">
      <div>
        <h1 className="font-Montserrat text-xl font-medium">My Experiences</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 max-[1200px]:grid-cols-2 max-[600px]:grid-cols-1 mt-6">
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_1} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className="bx bx-iframe text-orange-500 text-6xl max-[600px]:text-3xl"></i>
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Create Web Design</h1>
            <p className="font-Opensans text-gray-600">
              I have created website designs or frontend sections such as school
              websites, marketplace websites, and websites for the PPLG
              department.
            </p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_2} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className="bx bx-steps-up text-orange-500 text-6xl max-[600px]:text-3xl"></i>
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Create A Simple Algorithm</h1>
            <p className="font-Opensans text-gray-600">
              Create simple algorithms such as how to declare variables, then
              call them, and change the value of the variable.
            </p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_3} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className="bx bx-group text-orange-500 text-6xl max-[600px]:text-3xl"></i>
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Team Work Development</h1>
            <p className="font-Opensans text-gray-600">
              I am also currently working as a team to create a marketplace
              website for schools. Here, I play the role of frontend web
              developer.
            </p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_4} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className="bx bx-trophy text-orange-500 text-6xl max-[600px]:text-3xl"></i>
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Web Design Competitions</h1>
            <p className="font-Opensans text-gray-600">
              I participated in several web design competitions such as at
              Instiki, Primakara, and Udayana.
            </p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_5} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className="bx bx-community text-orange-500 text-6xl max-[600px]:text-3xl"></i>
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Organization</h1>
            <p className="font-Opensans text-gray-600">
              By joining an organization, I feel I can communicate and interact
              better with the people around me. I've participated in several
              organizations at school.
            </p>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gray-100 max-[600px]:p-4">
          <Image src={assets.experience_6} alt="" className="rounded-2xl"/>
          <div className="mt-4">
            <i className='bx bx-light-bulb-on text-orange-500 text-6xl max-[600px]:text-3xl'></i> 
            <h1 className="font-Opensans font-bold text-2xl max-[600px]:text-xl">Problem Solving</h1>
            <p className="font-Opensans text-gray-600">
              I was given several projects or assignments to solve several problems and errors at that time using JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
