import React from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

// We have SEO problem because the data is missing from the source code when the page is loaded, this is because useEffect renders the data in the second component execution cycle. But the pre-rendered next js page does not wait for useEffect to run, it will just pre-renders the page and ships it

// to resolve this issue we have to tell next js to pre-render the page with the data. Next js should wait for data and then pre-renders the page
function index(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // dummy api that will load the data after the component renders and this useEffect is executed
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, [])

  return <MeetupList meetups={props.meetups} />;
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

// ------------- getStaticProps() for static site generation
// When using getStaticProps we no longer need to manage state and fetch data using useEffect because the function will do that for us and pass the data as props to the page component
/* export async function getStaticProps () {
  // fetch the data from an api, or connect to a database, run any server-side code, access file systems
  // The code written here will never reach the client-side nor the server because the code is executed during build process when we run npm run build
  
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */

// ------------- getServerSideProps for server-side rendering
// runs always on the server for each request, and makes sure that the data fetched is always latest. This does not runs on deployment but on server-side
// both functions gets props for the page component
/* export async function getServerSideProps() {
  // do anything that you want to run on the server-side
  // nevers executes on the client-side
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */

export default index;
