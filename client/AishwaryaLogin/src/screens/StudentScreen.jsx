import React from "react";

const StudentScreen = () => {
  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      dob: "2002-05-14",
      createdAt: "2026-10-01T10:30:00Z",
      updatedAt: "2026-10-01T10:30:00Z",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya.verma@example.com",
      dob: "2003-02-21",
      createdAt: "2026-10-02T09:15:00Z",
      updatedAt: "2026-10-03T11:20:00Z",
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul.singh@example.com",
      dob: "2001-11-08",
      createdAt: "2026-10-03T08:45:00Z",
      updatedAt: "2026-10-03T08:45:00Z",
    },
    {
      id: 4,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      dob: "2002-07-19",
      createdAt: "2026-10-04T12:00:00Z",
      updatedAt: "2026-10-05T14:10:00Z",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      email: "vikram.joshi@example.com",
      dob: "2000-09-25",
      createdAt: "2026-10-05T07:30:00Z",
      updatedAt: "2026-10-05T07:30:00Z",
    },
    {
      id: 6,
      name: "Ananya Gupta",
      email: "ananya.gupta@example.com",
      dob: "2003-04-12",
      createdAt: "2026-10-06T10:00:00Z",
      updatedAt: "2026-10-07T16:25:00Z",
    },
    {
      id: 7,
      name: "Rohan Mehta",
      email: "rohan.mehta@example.com",
      dob: "2001-12-03",
      createdAt: "2026-10-07T13:20:00Z",
      updatedAt: "2026-10-07T13:20:00Z",
    },
    {
      id: 8,
      name: "Kavya Reddy",
      email: "kavya.reddy@example.com",
      dob: "2002-08-17",
      createdAt: "2026-10-08T09:40:00Z",
      updatedAt: "2026-10-09T10:15:00Z",
    },
    {
      id: 9,
      name: "Aditya Kumar",
      email: "aditya.kumar@example.com",
      dob: "2000-06-30",
      createdAt: "2026-10-09T11:10:00Z",
      updatedAt: "2026-10-09T11:10:00Z",
    },
    {
      id: 10,
      name: "Isha Jain",
      email: "isha.jain@example.com",
      dob: "2003-01-05",
      createdAt: "2026-10-10T08:00:00Z",
      updatedAt: "2026-10-11T12:45:00Z",
    },
  ]);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phoneNo</th>
            <th>dob</th>
          </tr>
        </thead>
        <tbody>
          {students.map((srow) => (
            <tr>
              <td>{srow.id}</td>
              <td>{srow.name}</td>
              <td>{srow.email}</td>
              <td>{srow.phone}</td>
              <td>{srow.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentScreen;
