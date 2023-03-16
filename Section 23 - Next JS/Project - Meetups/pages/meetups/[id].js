import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function details(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://farzeen:mongo123@meetups-cluster-udemy.h9x0rew.mongodb.net/meetups-app-demo?retryWrites=true&w=majority"
  );
  const db = client.db("meetups-app-demo");
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // fetching only the ids and no other fields

  client.close();

  // generating our array of paths dynamically
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({ params: { id: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  // context.params contains the dynamic part of the url
  const meetupId = context.params.id;

  const client = await MongoClient.connect(
    "mongodb+srv://farzeen:mongo123@meetups-cluster-udemy.h9x0rew.mongodb.net/meetups-app-demo?retryWrites=true&w=majority"
  );
  const db = client.db("meetups-app-demo");
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId), // _id is a special object in monogdb so we have to import ObjectId and convert our string id to compare the params id and db _id then convert the id back to a string when passing it to a prop
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  };
}

export default details;

/* export async function getStaticPaths() {
  // Because we have a dynamic path, server needs to know on build time, which paths it can support and which static pages it can deliver. That's why we use getStaticPaths. So, getStaticProps tells the server how to prepare data for each dynamic page and getStaticPaths tells the server how many paths and pages it needs to prepare for delivery at build time (simplified).

  // we can generate the paths array dynamically if we donot want to hardcode the values

  // We have to define paths for every possible id that is inside our db and that user can enter

  // If we donot have an id that user entered the fallback will run

  // if fallback is set to false it will show 404

  // complete explanation in this question https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616848#questions/17960450

  return {
    fallback: false,
    paths: [
      {
        params: {
          id: "m1",
        },
      },
      {
        params: {
          id: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.id;
  console.log(meetupId);

  return {
    props: {
      meetupId,
    },
  };
} */
