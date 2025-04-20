const Interest = ({ data, setData }) => {
    const handleChangeData=({item})=>{
        setData((prev)=>({
        ...prev,
        data.interest.includes(item) ? data.interests.filter((i)=>i!==item)
        }))
    }
  return (
    <div className="interest">
      <label>
        <input
          type="checkbox"
          checked={data.interests.includes("javascript")}
    onChange={()=>handleChangeData("javascript")}
        />
        Javascript
      </label>
      <label>
        <input type="checkbox" checked={data.interests.includes("react")} />
        React
      </label>
      <label>
        <input type="checkbox" checked={data.interests.includes("AI/ML")} />
        AI/ML
      </label>
      <label>
        <input type="checkbox" checked={data.interests.includes("web3.0")} />
        web3.0
      </label>
    </div>
  );
};
export default Interest;
