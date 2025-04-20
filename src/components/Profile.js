const Profile = ({ d, setData }) => {
  const handleDataChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };
  return (
    <div className="profile">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={d.name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={d.age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={d.email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};
export default Profile;
