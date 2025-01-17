import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/300");
  const [id, setId] = useState(uuidv4());

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (!name || !image) return;
    const newFriend = {
      id,
      name,
      image,
      balance: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    //setId(crypto.randomUUID());
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        name="friend-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌇Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
