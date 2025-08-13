import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Pesan berhasil dikirim!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Gagal mengirim pesan.");
    }
  };

  return (
    <div
      className="flex flex-col gap-6 px-30 mt-20 max-[1000px]:px-4 scroll-mt-[100px]"
      id="contact"
    >
      <div>
        <h1 className="font-Montserrat text-xl font-medium">Get In Touch</h1>
      </div>
      <div className="w-full">
        <div className="flex gap-6 w-full max-[1250px]:flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="flex gap-4 w-full max-[600px]:flex-col">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl"
                  type="text"
                  placeholder="Bhisma"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  Last Name
                </label>
                <input
                name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl"
                  type="text"
                  placeholder="Parasurama"
                />
              </div>
            </div>
            <div className="flex gap-4 w-full max-[600px]:flex-col">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  Email
                </label>
                <input
                name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl"
                  type="email"
                  placeholder="bhisma@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  Phone
                </label>
                <input
                name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl"
                  type="text"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  Your Subject
                </label>
                <input
                name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-Montserrat font-medium" htmlFor="">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter Here"
                  className="font-Opensans w-full bg-gray-100 py-3 px-6 rounded-xl h-52"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 bg-orange-500 rounded-full text-white mt-4 w-fit cursor-pointer flex items-center gap-2 font-Opensans"
            >
              {loading ? "Sending..." : "Send Message"}
              <i className="bx bx-paper-plane"></i>
            </button>
          </form>
          <div>
            <Image src={assets.contact} className="rounded-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6 gap-20 max-[1300px]:grid-cols-2 max-[1300px]:gap-6 max-[800px]:grid-cols-1">
          <div className="p-8 rounded-2xl bg-black flex flex-col items-center">
            <i className="bx bx-location text-white text-4xl p-4 rounded-full bg-orange-500"></i>
            <h1 className="font-Montserrat text-2xl text-white font-medium">
              Location
            </h1>
            <p className="text-white/80 font-Opensans text-center">
              Br Camenggaon, Celuk Village, Sukawati
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-black flex flex-col items-center">
            <i className="bx bx-mail-open text-white text-4xl p-4 rounded-full bg-orange-500"></i>
            <h1 className="font-Montserrat text-2xl text-white font-medium">
              Email
            </h1>
            <p className="text-white/80 font-Opensans text-center">
              bhismaparasurama2023@gmail.com
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-black flex flex-col items-center">
            <i className="bx bx-phone text-white text-4xl p-4 rounded-full bg-orange-500"></i>
            <h1 className="font-Montserrat text-2xl text-white font-medium">
              Phone
            </h1>
            <p className="text-white/80 font-Opensans text-center">
              +6281529575490
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
