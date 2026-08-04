import React from "react";

function StudentRegistration() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">
          Student Registration Form
        </h1>

        <form className="space-y-6">
          {/* Personal Information */}
          <section>
            <h2 className="mb-4 border-b pb-2 text-xl font-semibold">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="studentId" className="mb-2 block font-medium">
                  Student ID
                </label>

                <input
                  id="studentId"
                  type="text"
                  placeholder="e.g. 21-12345-1"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-medium">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="dob" className="mb-2 block font-medium">
                  Date of Birth
                </label>

                <input
                  id="dob"
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Gender</label>

                <div className="mt-2 flex gap-5">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" />
                    Male
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" />
                    Female
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" />
                    Other
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Information */}
          <section>
            <h2 className="mb-4 border-b pb-2 text-xl font-semibold">
              Academic Information
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="department" className="mb-2 block font-medium">
                  Department
                </label>

                <select
                  id="department"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Select Department</option>
                  <option>CSE</option>
                  <option>EEE</option>
                  <option>BBA</option>
                  <option>Architecture</option>
                </select>
              </div>

              <div>
                <label htmlFor="semester" className="mb-2 block font-medium">
                  Semester
                </label>

                <select
                  id="semester"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Select Semester</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                </select>
              </div>

              <div>
                <label htmlFor="cgpa" className="mb-2 block font-medium">
                  CGPA
                </label>

                <input
                  id="cgpa"
                  type="number"
                  step="0.01"
                  placeholder="e.g. 3.75"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="profile" className="mb-2 block font-medium">
                  Profile Picture
                </label>

                <input
                  id="profile"
                  type="file"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="mb-4 border-b pb-2 text-xl font-semibold">
              Skills
            </h2>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                (skill) => (
                  <label key={skill} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {skill}
                  </label>
                )
              )}
            </div>
          </section>

          {/* Address */}
          <section>
            <h2 className="mb-4 border-b pb-2 text-xl font-semibold">
              Address
            </h2>

            <textarea
              rows={5}
              placeholder="Enter your address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="rounded-lg border border-gray-400 px-6 py-2 transition hover:bg-gray-200"
            >
              Reset
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default StudentRegistration;