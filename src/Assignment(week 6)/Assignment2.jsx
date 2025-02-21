import { useMemo, useState } from "react";

const words = ["hii", " himanshu", "home ", "go", "do", "enter"];
const t_lines = 1000;
const all_words = [];

for (let i = 0; i <= t_lines; i++) {
  let sentence = " ";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += "";
  }
  all_words.push(sentence);
}
export default function Assignment2() {
  const [sentences, setSentences] = useState(all_words);
  const [filtersentence, setFilterSentence] = useState("");
  const filteredsentences = useMemo(() => {
    return sentences.filter((x) => x.includes(filtersentence));
  },[sentences,filtersentence]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setFilterSentence(e.target.value);
        }}
      />

      {filteredsentences.map((word) => (
        <div>{word}</div>
      ))}
    </>
  );
}
