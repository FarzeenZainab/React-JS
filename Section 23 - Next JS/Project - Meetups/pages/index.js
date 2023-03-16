import React from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function index(props) {
  return (
    <>
      <Head>
        <title>Meetups - Home</title>
        <meta
          name="description"
          content="Browse list of meetups near Karachi"
        />
      </Head>
      <MeetupList meetups={props.meetups} />{" "}
    </>
  );
}

export async function getStaticProps() {
  // establishing the connect
  const client = await MongoClient.connect(
    "mongodb+srv://farzeen:mongo123@meetups-cluster-udemy.h9x0rew.mongodb.net/meetups-app-demo?retryWrites=true&w=majority"
  );
  const db = client.db("meetups-app-demo");
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray(); //find all the documents inside mongo collection
  client.close();

  const meetups = data.map((meetup) => {
    return {
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      id: meetup._id.toString(),
    };
  });

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 1,
  };
}

export default index;
