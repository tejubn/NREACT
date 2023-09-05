import { ReactDOM } from "react";
const Contact = () => {
  const empolyeeData = [
    {
      name: "abc",
      empid: 123,
    },
    {
      name: "hjs",
      empid: 126,
    },
    {
      name: "iou",
      empid: 173,
    },
  ];

  return (
    <div>
      {empolyeeData.map((data) => (
        // <p>{data.name}</p>
        console.log(data),
        <table>
          <tr>
            <td>{data.name}</td>
            
            <td>{data.empid}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};
export default Contact;
