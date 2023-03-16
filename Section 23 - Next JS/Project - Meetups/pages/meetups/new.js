import React, { useState } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetup() {
  const [rowInserted, setRowInserted] = useState(false);

  const onAddMeetup = async (meetupData) => {
    rowInserted && setRowInserted(false);
    const response = await fetch("/api/new-meetup", {
      method: "POST", // specifying the HTTP method
      body: JSON.stringify(meetupData), // attaching the data that will be sent to the server
      headers: {
        "Content-Type": "application/json", // adding request headers to tell the server that we are sending json data
      },
    });
    const res = await response.json();
    if (res.inserted) {
      setRowInserted(true);
    }
  };

  return (
    <>
      <Head>
        <title>Add new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
      {rowInserted && <p>New Meetup added successfully</p>}
    </>
  );
}

export default newMeetup;

// JSON.stringify => converts js object to json object
// .json() converts JSON obj to js object
