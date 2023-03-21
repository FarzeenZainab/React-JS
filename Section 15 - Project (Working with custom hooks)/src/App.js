import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const requestConfig = {
    url: "https://taks-udemy-default-rtdb.firebaseio.com/tasks.json",
  };

  useEffect(() => {
    const transformData = (tasksData) => {
      const loadedTasks = [];
      for (const taskKey in tasksData) {
        loadedTasks.push({ id: taskKey, text: tasksData[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(requestConfig, transformData);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  if (error) {
    console.log(`Error: ${error}`);
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
