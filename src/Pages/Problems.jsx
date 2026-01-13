import { useState } from "react";
import "../styles1/Problems.css";
function Problems() {
  const [selectDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchTerm, setSearchterm] = useState("");
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      topic: "Arrays",
      difficulty: "Easy",
      status: "Solved",
    },
    {
      id: 2,
      title: "Reverse String",
      topic: "Strings",
      difficulty: "Medium",
      status: "Solved",
    },
    {
      id: 3,
      title: "Valid Palindrome",
      topic: "Stack",
      difficulty: "Hard",
      status: "Attempted",
    },
  ];
  const topics = ["All", ...new Set(problems.map((p) => p.topic))];

  const filteredproblems =
    selectDifficulty === "All"
      ? problems
      : problems.filter((problem) => problem.difficulty === selectDifficulty);

  const topicFilteredProblems =
    selectedTopic === "All"
      ? filteredproblems
      : filteredproblems.filter((problem) => problem.topic === selectedTopic);

  const searchedProblems = topicFilteredProblems.filter((problem) =>
    problem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="problem-header">
        <p>Problems</p>
        <input
          type="text"
          placeholder="Search Problems..."
          value={searchTerm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>
      <div className="problem-buttons">
        <button
          id="button"
          className={selectDifficulty === "All" ? "active" : ""}
          onClick={() => setSelectedDifficulty("All")}
        >
          All
        </button>
        <button
          id="button"
          className={selectDifficulty === "Easy" ? "active" : ""}
          onClick={() => setSelectedDifficulty("Easy")}
        >
          Easy
        </button>
        <button
          id="button"
          className={selectDifficulty === "Medium" ? "active" : ""}
          onClick={() => setSelectedDifficulty("Medium")}
        >
          Medium
        </button>
        <button
          id="button"
          className={selectDifficulty === "Hard" ? "active" : ""}
          onClick={() => setSelectedDifficulty("Hard")}
        >
          Hard
        </button>
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th className="problem-title">Title</th>
            <th className="problem-topic">Topic</th>
            <th className="problem-Difficulty">Difficulty</th>
            <th className="problem-status">Status</th>
          </tr>
        </thead>
        <tbody>
          {searchedProblems.map((problem) => (
            <tr key={problem.id}>
              <td className="problem-title">{problem.title}</td>
              <td className="problem-topic">{problem.topic}</td>
              <td>
                <span
                  className={`difficulty ${problem.difficulty.toLowerCase()}`}
                >
                  {problem.difficulty}
                </span>
              </td>
              <td className="problem-status">
                <span className={`status ${problem.status.toLowerCase()}`}>
                  {problem.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Problems;
